# Guide for Guides
Welcome to the Guide for Guides!

## How do I help?

- File an issue with a proposal for the new Guide.
  - Attach the label of `guide-suggestion`.
- Make sure to cc a domain expert if you aren't one.
- Once the guide looks finished, get a :+1: from domain expert and some word smiths over at @github/guides or @github/docs.

Just because you wrote the proposal doesn't mean you have to write the guide. It's up to you!

If there's a guide currently being written you want to help out with, don't be a stranger! Comment on the issue to provide feedback or see if the contributor would love your help

## How should I go about writing a Guide?

- Write the steps then show an image corresponding to those words when writing a guide.

If you or some domain expert thinks the guide is a good idea, just start writing. We can iron out small details of format later (I sometimes find an outline in the initial issue gets me going).

If there isn't a category folder for your file yet, don't fret. Either create one you think is good, or don't worry about it and we can work this out in the pull request.

### Images
Images should be put in the same directory that you're writing your guide in:

```
![GitHub’s API Developer Site README](features/masteringmarkdown/github-developer-api-readme.jpg)
```
This way we can render them with Markdown AND they're easier to keep track of for updating. Since `masteringmarkdown-github-developer-api-readme.jpg` lives in the same directory as the Markdown file referencing it, we can just call the file by name in the parenthesis part of the image Markdown.

## Determining your guide's order

Open up the *_config.yml* file in the root of the *guides* folder, and you'll see some code that looks like this:

```yml
organization:
  - /introduction/flow/index.html
  - /introduction/desktop/index.html
  - /activities/contributing-to-open-source/index.html
  - /activities/forking/index.html
  - /activities/socialize/index.html
  - /features/issues/index.html
  - /features/mastering-markdown/index.html
```

Those paths determine how the landing page for Guides is ordered. (Jekyll gleefully fetches whatever it can, so sometimes the front page gets reshuffled when the site is built.)

Add a path to your new guide wherever you see fit!
