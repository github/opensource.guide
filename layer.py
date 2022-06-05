# Replace the old existing layer.py file in CNN Scratch from @AlessandroSaviolo and replace it with this new layer.py 
# It will resolve the Error caused in line 239 in layer.py and will fix learning rate also and no longer gives the None and Float issue 
# The bug was in Layer.py file in 'lr_schedule' function in which no condition was passed when iteration was above 0 and less than 10,000 ,
# that's why the function returned None and learning rate became None in the 2nd iteration ...
# HERE IS THE WHOLE WORKING CODE :
# For more clearance and doubts regarding to this error, you can find me github: https://github.com/niranjandasMM 

import numpy as np


def softmax(x):
    return np.exp(x) / np.sum(np.exp(x), axis=0)


def cross_entropy(x):
    return -np.log(x)


def regularized_cross_entropy(layers, lam, x):
    loss = cross_entropy(x)
    for layer in layers:
        loss += lam * (np.linalg.norm(layer.get_weights()) ** 2)
    return loss


def leakyReLU(x, alpha=0.001):
    return x * alpha if x < 0 else x


def leakyReLU_derivative(x, alpha=0.01):
    return alpha if x < 0 else 1


def lr_schedule(learning_rate, iteration):
    # print(f"lr_schedule function learning rate is : {learning_rate}")
    # print(f"lr_schedule function iteration is : {iteration}")
    if iteration == 0:
        return learning_rate
    if (iteration >= 0) and (iteration <= 10000):
        return learning_rate
    if iteration > 10000:
        return learning_rate * 0.1
    if iteration > 30000:
        return learning_rate * 0.1


class Convolutional:                                        # convolution layer using 3x3 filters

    def __init__(self, name, num_filters=16, stride=1, size=3, activation=None):
        self.name = name
        self.filters = np.random.randn(num_filters, 3, 3) * 0.1
        self.stride = stride
        self.size = size
        self.activation = activation
        self.last_input = None
        self.leakyReLU = np.vectorize(leakyReLU)
        self.leakyReLU_derivative = np.vectorize(leakyReLU_derivative)

    def forward(self, image):
        self.last_input = image                             # keep track of last input for later backward propagation

        input_dimension = image.shape[1]                                                # input dimension
        output_dimension = int((input_dimension - self.size) / self.stride) + 1         # output dimension

        out = np.zeros((self.filters.shape[0], output_dimension, output_dimension))     # create the matrix to hold the
                                                                                        # values of the convolution

        for f in range(self.filters.shape[0]):              # convolve each filter over the image,
            tmp_y = out_y = 0                               # moving it vertically first and then horizontally
            while tmp_y + self.size <= input_dimension:
                tmp_x = out_x = 0
                while tmp_x + self.size <= input_dimension:
                    patch = image[:, tmp_y:tmp_y + self.size, tmp_x:tmp_x + self.size]
                    out[f, out_y, out_x] += np.sum(self.filters[f] * patch)
                    tmp_x += self.stride
                    out_x += 1
                tmp_y += self.stride
                out_y += 1
        if self.activation == 'relu':                       # apply ReLU activation function
            self.leakyReLU(out)
        return out

    def backward(self, din, learn_rate=0.005):
        
        input_dimension = self.last_input.shape[1]          # input dimension

        if self.activation == 'relu':                       # back propagate through ReLU
           self.leakyReLU_derivative(din)

        dout = np.zeros(self.last_input.shape)              # loss gradient of the input to the convolution operation
        dfilt = np.zeros(self.filters.shape)                # loss gradient of filter

        for f in range(self.filters.shape[0]):              # loop through all filters
            tmp_y = out_y = 0
            while tmp_y + self.size <= input_dimension:
                tmp_x = out_x = 0
                while tmp_x + self.size <= input_dimension:
                    patch = self.last_input[:, tmp_y:tmp_y + self.size, tmp_x:tmp_x + self.size]
                    dfilt[f] += np.sum(din[f, out_y, out_x] * patch, axis=0)
                    dout[:, tmp_y:tmp_y + self.size, tmp_x:tmp_x + self.size] += din[f, out_y, out_x] * self.filters[f]
                    tmp_x += self.stride
                    out_x += 1
                tmp_y += self.stride
                out_y += 1
        self.filters -= learn_rate * dfilt                  # update filters using SGD
        return dout             # return the loss gradient for this layer's inputs


    def get_weights(self):
        return np.reshape(self.filters, -1)


class Pooling:                                              # max pooling layer using pool size equal to 2
    def __init__(self, name, stride=2, size=2):
        self.name = name
        self.last_input = None
        self.stride = stride
        self.size = size

    def forward(self, image):
        self.last_input = image                             # keep track of last input for later backward propagation

        num_channels, h_prev, w_prev = image.shape
        h = int((h_prev - self.size) / self.stride) + 1     # compute output dimensions after the max pooling
        w = int((w_prev - self.size) / self.stride) + 1

        downsampled = np.zeros((num_channels, h, w))        # hold the values of the max pooling

        for i in range(num_channels):                       # slide the window over every part of the image and
            curr_y = out_y = 0                              # take the maximum value at each step
            while curr_y + self.size <= h_prev:             # slide the max pooling window vertically across the image
                curr_x = out_x = 0
                while curr_x + self.size <= w_prev:         # slide the max pooling window horizontally across the image
                    patch = image[i, curr_y:curr_y + self.size, curr_x:curr_x + self.size]
                    downsampled[i, out_y, out_x] = np.max(patch)       # choose the maximum value within the window
                    curr_x += self.stride                              # at each step and store it to the output matrix
                    out_x += 1
                curr_y += self.stride
                out_y += 1

        return downsampled

    def backward(self, din, learning_rate):
        num_channels, orig_dim, *_ = self.last_input.shape      # gradients are passed through the indices of greatest
                                                                # value in the original pooling during the forward step

        dout = np.zeros(self.last_input.shape)                  # initialize derivative

        for c in range(num_channels):
            tmp_y = out_y = 0
            while tmp_y + self.size <= orig_dim:
                tmp_x = out_x = 0
                while tmp_x + self.size <= orig_dim:
                    patch = self.last_input[c, tmp_y:tmp_y + self.size, tmp_x:tmp_x + self.size]    # obtain index of largest
                    (x, y) = np.unravel_index(np.nanargmax(patch), patch.shape)                     # value in patch
                    dout[c, tmp_y + x, tmp_x + y] += din[c, out_y, out_x]
                    tmp_x += self.stride
                    out_x += 1
                tmp_y += self.stride
                out_y += 1

        return dout

    def get_weights(self):                          # pooling layers have no weights
        return 0


class FullyConnected:                               # fully-connected layer
    def __init__(self, name, nodes1, nodes2, activation):
        self.name = name
        self.weights = np.random.randn(nodes1, nodes2) * 0.1
        self.biases = np.zeros(nodes2)
        self.activation = activation
        self.last_input_shape = None
        self.last_input = None
        self.last_output = None
        self.leakyReLU = np.vectorize(leakyReLU)
        self.leakyReLU_derivative = np.vectorize(leakyReLU_derivative)

    def forward(self, input):
        self.last_input_shape = input.shape         # keep track of last input shape before flattening
                                                    # for later backward propagation

        input = input.flatten()                                 # flatten input

        output = np.dot(input, self.weights) + self.biases      # forward propagate

        if self.activation == 'relu':                           # apply ReLU activation function
            self.leakyReLU(output)

        self.last_input = input                     # keep track of last input and output for later backward propagation
        self.last_output = output

        return output

    def backward(self, din, learning_rate): #lr=0.005
        print(f"Fully connected layer backward : learning rate is  :{learning_rate}")
        if self.activation == 'relu':                             # back propagate through ReLU
           self.leakyReLU_derivative(din)

        self.last_input = np.expand_dims(self.last_input, axis=1)
        din = np.expand_dims(din, axis=1)

        dw = np.dot(self.last_input, np.transpose(din))           # loss gradient of final dense layer weights
        db = np.sum(din, axis=1).reshape(self.biases.shape)       # loss gradient of final dense layer biases

        self.weights -= learning_rate * dw                        # update weights and biases
        self.biases -= learning_rate * db

        dout = np.dot(self.weights, din)
        return dout.reshape(self.last_input_shape)

    def get_weights(self):
        return np.reshape(self.weights, -1)

class Dense:                                        # dense layer with softmax activation
    def __init__(self, name, nodes, num_classes):
        self.name = name
        # self.weights = np.random.randn(nodes, num_classes) * 0.1
        self.weights = np.random.randn(nodes, num_classes) / nodes
        self.biases = np.zeros(num_classes)
        self.last_input_shape = None
        self.last_input = None
        self.last_output = None

    def forward(self, input):
        self.last_input_shape = input.shape         # keep track of last input shape before flattening
                                                    # for later backward propagation

        input = input.flatten()                                 # flatten input

        output = np.dot(input, self.weights) + self.biases      # forward propagate

        self.last_input = input                     # keep track of last input and output for later backward propagation
        self.last_output = output

        return softmax(output)

    def backward(self, din, learning_rate):
        # print(f"Dense layer : learning rate is  :{learning_rate}")
        for i, gradient in enumerate(din):
            if gradient == 0:                   # the derivative of the loss with respect to the output is nonzero
                continue                        # only for the correct class, so skip if the gradient is zero
            
            t_exp = np.exp(self.last_output)                      # gradient of dout[i] with respect to output
            S = np.sum(t_exp)
            dout_dt = -t_exp[i] * t_exp / (S ** 2)
            dout_dt[i] = t_exp[i] * (S - t_exp[i]) / (S ** 2)

            d_t_d_w = self.last_input

            dt = gradient * dout_dt                               # gradient of loss with respect to output

            dout = self.weights @ dt                              # gradient of loss with respect to input

            # update weights and biases
            self.weights -= learning_rate * (np.transpose(self.last_input[np.newaxis]) @ dt[np.newaxis])
            self.biases -= learning_rate * dt

            return dout.reshape(self.last_input_shape)            # return the loss gradient for this layer's inputs

    def get_weights(self):
        return np.reshape(self.weights, -1)


