---
layout: default
---

# Contributing to Open Source Guides

Thanks for checking out the Open Source Guides! We're excited to hear and learn from you. Your experiences will benefit others who read and use these guides.

We've put together the following guidelines to help you figure out where you can best be helpful.

## Table of Contents

0. [Types of contributions we're looking for](#types-of-contributions-were-looking-for)
0. [Ground rules & expectations](#ground-rules--expectations)
0. [How to contribute](#how-to-contribute)
0. [Style guide](#style-guide)
0. [Setting up your environment](#setting-up-your-environment)
0. [Contribution review process](#contribution-review-process)
0. [Community](#community)

## Types of contributions we're looking for
There are many ways you can directly contribute to the guides (in descending order of need):

* Fix editorial inconsistencies or inaccuracies
* Add stories, examples, or anecdotes that help illustrate a point
* Revise language to be more approachable and friendly
* [Translate guides into other languages](docs/translations.md)

Interested in making a contribution? Read on!

## Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

* Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
* Open Source Guides are released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.
* If you open a pull request, please ensure that your contribution passes all tests. If there are test failures, you will need to address them before we can merge your contribution.
* When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created as others will do so if they appreciate it.

## How to contribute

If you'd like to contribute, start by searching through the [issues](https://github.com/github/opensource.guide/issues) and [pull requests](https://github.com/github/opensource.guide/pulls) to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this guide, do one of the following:
* **If your contribution is minor,** such as a typo fix, open a pull request.
* **If your contribution is major,** such as a new guide, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.

## Style guide
If you're writing content, see the [style guide](./docs/styleguide.md) to help your prose match the rest of the Guides.

## Setting up your environment

This site is powered by [Jekyll](https://jekyllrb.com/). Running it on your local machine requires a working [Ruby](https://www.ruby-lang.org/en/) installation with [Bundler](https://bundler.io/).

Once you have that set up, run:

    script/bootstrap
    script/server

…and open http://localhost:4000 in your web browser.

## Community

Discussions about the Open Source Guides take place on this repository's [Issues](https://github.com/github/opensource.guide/issues) and [Pull Requests](https://github.com/github/opensource.guide/pulls) sections. Anybody is welcome to join these conversations. There is also a [mailing list](http://eepurl.com/cecpnT) for regular updates.

Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation.



title: where
description: Liquid filter that selects from arrays.
---
 Creates an array including only the objects with a given property value, or any [truthy]({{ "/basics/truthy-and-falsy/truthy" | prepend: site.baseurl }}) value by default.
 In this example, assume you have a list of products and you want to show your kitchen products separately. Using `where`, you can create an array containing only the products that have a `"type"` of `"kitchen"`.
 <p class="code-label">Input</p>
{% raw %}
```liquid
All products:
{% for product in products %}
- {{ product.title }}
{% endfor %} 
 {% assign kitchen_products = site.pages | where: "type", "kitchen" %}
 Kitchen products:
{% for product in kitchen_products %}
- {{ product.title }}
{% endfor %} 
```
{% endraw %}
 <p class="code-label">Output</p>
```text
All products:
- Vacuum
- Spatula
- Television
- Garlic press
 Kitchen products:
- Spatula
- Garlic press
 ```
 Say instead you have a list of products and you only want to show those that are available to buy. You can `where` with a property name but no target value to include all products with a [truthy]({{ "/basics/truthy-and-falsy/truthy" | prepend: site.baseurl }}) `"available"` value.
 <p class="code-label">Input</p>
{% raw %}
```liquid
All products:
{% for product in products %} 
- {% product.title %}
{% endfor %}
 {% assign available_products = products | where: "available" %}
 Available products:
{% for product in available_products %} 
- {% product.title %}
  @samdoiron
samdoiron 22 days ago  Contributor
Wrong braces, fix incoming.

 @jaymifoster	Reply…
 {% endfor %}
 ```
{% endraw %}
 <p class="code-label">Output</p>
 ```text
All products:
- Coffee mug
- Limited edition sneakers
- Boring sneakers
 Available products:
- Coffee mug
- Boring sneakers
 ```
 The `where` filter can also be used to find a single object in an array when combined with the `first` filter. For example, say you want to show off the shirt in your new fall collection.
 <p class="code-label">Input</p>
{% raw %}
```liquid
{% assign new_shirt = products | where: "type", "shirt" | first %}
 Featured product: {% new_shirt.title %}
```
{% endraw %}
 <p class="code-label">Output</p>
```text
Featured product: Hawaiian print sweater vest
```
 ProTip! Use n and p to navigate between commits in a pull request.
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About


