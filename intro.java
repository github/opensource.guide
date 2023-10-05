What is Java?

Java is a popular programming language, created in 1995.

It is owned by Oracle, and more than 3 billion devices run Java.

It is used for:

    Mobile applications (specially Android apps)
    Desktop applications
    Web applications
    Web servers and application servers
    Games
    Database connection
    And much, much more!

Why Use Java?

    Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
    It is one of the most popular programming language in the world
    It has a large demand in the current job market
    It is easy to learn and simple to use
    It is open-source and free
    It is secure, fast and powerful
    It has a huge community support (tens of millions of developers)
    Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
    As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa

  Java Syntax

In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:

Main.java

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
  }

Example explained

Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.
  Note: Java is case-sensitive: "MyClass" and "myclass" has different meaning.

The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: Go to the Get Started Chapter for how to install Java. The output should be:
Hello World
The main Method

The main() method is required and you will see it in every Java program:
  

public static void main(String[] args)

Any code inside the main() method will be executed. Don't worry about the keywords before and after main. You will get to know them bit by bit while reading this tutorial.

For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.
System.out.println()

Inside the main() method, we can use the println() method to print a line of text to the screen:

public static void main(String[] args) {
  System.out.println("Hello World");
}


Note: The curly braces {} marks the beginning and the end of a block of code.

System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).

Don't worry too much about System, out and println(). Just know that you need them together to print stuff to the screen.

You should also note that each code statement must end with a semicolon (;).

