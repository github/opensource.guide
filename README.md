# Open Source Guides
[![Build Status](https://github.com/github/opensource.guide/workflows/GitHub%20Actions%20CI/badge.svg)](https://github.com/github/opensource.guide/actions)

Open Source Guides (https://opensource.guide/) are a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open-source project.

## Background
Open Source Guides were created and are curated by GitHub, along with input from outside community reviewers, but they are not exclusive to GitHub products. One reason we started this project is that we felt that there weren't enough resources for people creating open-source projects.

Our goal was to aggregate community best practices, *not* what GitHub (or any other individual or entity) thinks is best. Therefore, we used examples and quotations from others to illustrate our points.

## Contributing

This site is powered by [Jekyll](https://jekyllrb.com/). Check out our [contributing guidelines](/CONTRIBUTING.md) for ways to offer feedback and contribute.

## Licenses

Content is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See [notices](notices.md) for complete details, including attribution guidelines, contribution terms, and software and third-party licenses and permissions.

## Folder Structure 

```.devcontainer``` This folder contains configuration files (like devcontainer.json) that define a <strong>development environment</strong> for the project.
It helps set up a consistent workspace for developers, ensuring everyone works with the same tools, settings, and dependencies, regardless
of their local setup.

```.github``` This folder is used to store GitHub-specific configuration files for the repository. It helps manage automation, workflows, and guidelines
for contributors.

```_articles``` This folder contains all the written content (articles) for this project, organized by language and topic. These articles provide
helpful guidance, best practices, and insights about contributing to open source projects.

```_data``` This folder contains data files (in formats like YAML) used to store structured information, such as site settings, translations,
or metadata. The repository reads these files to dynamically generate parts of the website, such as menus, translations, or lists. The folder is important
because it separates content from code, making it easier to update data without changing the code itself.

```_includes```
This folder contains reusable chunks of HTML code, like headers, footers, or components that appear on multiple pages.
The files within this folder are inserted into larger templates or pages, reducing repetition and keeping the code organized. This folder
ensures consistency across the site and makes it easy to update shared elements in one place instead of multiple files.

```_layouts```
This folder contains layout templates (files) for the site. Each file in the folder is a template for a page on the application.
The layout templates in this folder act like blueprints: they determine where certain parts of the page go. Storing all the templates in this folder allows
for components to be reused across multiple pages, which helps keep the site consistent and easier to maintain.

```assets``` This folder contains static files like images, CSS (styles), and JavaScript (scripts) used to style and add functionality to the website.
These files are served to users when they visit the site, making it look nice and interactive. Storing all the design and functionality-related files in one place
keeps the repository organized.

```docs``` This folder holds documentation files related to the project. It provides extra information for developers or contributors,
such as how to set up or use the project. This extra information gives developers the opportunity to contribute to this repository beyond just the README file.

```node_modules``` This folder contains all the dependencies (external libraries and tools) managed by Node.js, which are needed to build or run the project.
It provides the code libraries the project relies on, such as tools for building the website and running workflows. It ensures the project works as expected without
requiring developers to manually install every dependency.

```script``` This folder stores automation scripts used for specific tasks, like testing, building, or deploying the project. It runs the commands or tools
to streamline workflows, such as running tests or ignoring specific URLs during builds. This folder automates repetitive tasks, saving time
and reducing human error.

```test``` This folder contains test files and configurations to ensure the project works as expected. It runs checks (tests) on the code, workflows, or site functionality
to catch bugs or issues before changes are merged. The files in this folder maintain the quality of the project by verifying everything works correctly, which is especially important
for collaborative projects.

## Acknowledgments

The initial release of these guides were authored by **[@nayafia][1], [@bkeepers][2], [@stephbwills][3],** and **[@mlinksva][4]**.

Thanks to **[@aitchabee][5], [@benbalter][6], [@brettcannon][7], [@caabernathy][8], [@coralineada][9], [@dmleong][10], [@ericholscher][11], [@gr2m][12], [@janl][13], [@jessfraz][14], [@joshsimmons][15], [@kfogel][16], [@kytrinyx][17], [@lee-dohm][18], [@mikeal][19], [@mikemcquaid][20], [@nathansobo][21], [@nruff][22], [@nsqe][23], [@orta][24], [@parkr][25], [@shazow][26], [@steveklabnik][27],** and **[@wooorm][28]** for lending their valuable input and expertise leading up to the initial release, and to **[@sophshep][29]** and **[@jeejkang][30]** for designing and illustrating the guides.

## Disclaimer
While we've got advice about running an open source project, we're not lawyers. Be sure to read our [disclaimer](notices.md#legal-disclaimer) before diving in.

[1]:https://github.com/nayafia
[2]:https://github.com/bkeepers
[3]:https://github.com/stephbwills
[4]:https://github.com/mlinksva
[5]:https://github.com/aitchabee
[6]:https://github.com/benbalter
[7]:https://github.com/brettcannon
[8]:https://github.com/caabernathy
[9]:https://github.com/CoralineAda
[10]:https://github.com/dmleong
[11]:https://github.com/ericholscher
[12]:https://github.com/gr2m
[13]:https://github.com/janl
[14]:https://github.com/jessfraz
[15]:https://github.com/joshsimmons
[16]:https://github.com/kfogel
[17]:https://github.com/kytrinyx
[18]:https://github.com/lee-dohm
[19]:https://github.com/mikeal
[20]:https://github.com/MikeMcQuaid
[21]:https://github.com/nathansobo
[22]:https://github.com/nruff
[23]:https://github.com/nsqe
[24]:https://github.com/orta
[25]:https://github.com/parkr
[26]:https://github.com/shazow
[27]:https://github.com/steveklabnik
[28]:https://github.com/wooorm
[29]:https://github.com/sophshep
[30]:https://github.com/jeejkang
