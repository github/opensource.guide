# Content Model

The Open Source Handbook helps individuals, communities, and companies embrace open source software. It explains not only how to accomplish a task, but why you'd want to, and how that task fits into the larger story of consuming, contributing to, and producing open source software.

This content is created and curated by GitHub, and covers topics that are very relevant to GitHub users, but it is not specific to GitHub products.

For content that is specific to GitHub products, see:

- help.github.com - gets existing users unstuck and back to work.
- guides.github.com -  tutorials about a larger idea or product feature for new users.

## Content Hierarchy

The content hierarchy is as follows:

* [Project Role](#project-role)
  * [Topic](#topic)
    * [Article](#article)
      * [Content Elements](#content-elements)
    
For example:

* Producing an open source project
  * Marketing your project
    * "Spreading the Word"
      * Pull quote: _"A well-designed website is by far one of the best things we did for Django"_

### Project Role

A _project role_ roughly describes an individual's relationship with an open source project:

0. **Basics**: rudimentary introduction to the concepts of open source.
0. (coming in v2) **Consuming**: using open source software.
0. (coming in v2) **Contributing**: getting involved and improving existing open source projects.
0. **Producing**: starting, growing, and maintaining your own open source project.

### Topic

Within each project role are _topics_. A topic groups together content around a high-level goal of the user, such as "Marketing" or "Troubleshooting". Topics should begin with a [gerund](https://en.wikipedia.org/wiki/Gerund).

Examples:

- :smile: "Building a community"
- :smile: "Reviewing contributions"
- :smile: "Choosing a license"
- :cry: "Code review"
- :cry: "Legal"

### Article

An article is a deeper dive into a specific aspect of a topic. Articles fall into one of the following content types:

- [Section Page](#section-page)
- [Conceptual](#conceptual-content)
- [Tactical](#tactical-content)
- [Referential](#referential-content)
- [Frequently Asked Questions (FAQs)](#frequently-asked-questions-faqs)

### Section Page

A section page introduces the reader to a new [topic](#topics): for example, "Marketing" or "Sustaining Growth". It briefly explains why that topic is important and gives them a preview of what's to come.

Section pages can be thought of as landing pages for articles that are all closely related. While articles are ordered to suggest directionality (for example, "Setting expectations" would come before "Preparing for launch"), the section page should give the reader enough information to jump to the content they find most personally relevant. In other words, the section page offers gentle guidance to readers who don't know what they want, but gives more advanced readers the freedom to choose what they like.

### Conceptual Content

Conceptual content answers the questions "What is this?" and "Why do I care?"  Open source introduces lots of unique, innovative concepts to people with varying levels of experience and various disciplines.

Conceptual content should either be generalized for *all* audiences, or tailored to one audience, but should not attempt to do both. Content generalized to all audiences could also reference [related content](#related-content) that is specific to an individual audience. This requires some thinking! For example, a high-level introduction to open source can be generalized for all audiences, but there are unique implications for developers, companies, and non-technical that warrant separate pieces of content for each audience.

Conceptual content is structured as:

- **Title** - TODO: advice on titles
- **[Introduction](#introductions)**
- ???

### Tactical Content

Tactical content answers the question "How?". This is arguably the most common type of content developed for the handbook because it is meant to describe best practices in open source. This content should explain the steps necessary to achieve a single goal. If there is not a community best practice, it should give an overview of a few approaches and reference other tactical content for details.

Tactical content is structured as:

- **Title** - Tactical articles should begin with a gerund. For example, "Enforcing a code of conduct".

- **Introduction** - The introduction should should explain what the user will specifically accomplish by applying these tactics, and can and probably should reference [conceptual content](#conceptual-content) to further explain why you would want to apply the tactics. For example, an article on "Enforcing a Code of Conduct" should reference the conceptual content "About codes of conduct".

- **Tactical sections** - These sections explain each tactic involved in achieving the goal. They may be procedural steps, or just a list of individual tactics that should be considered. For example, an article on "Enforcing a code of conduct" might have a tactical section called "Responding to reports of abuse".

- **Summarizing conclusion** - Conclude by briefly reviewing how these tactics connect to the larger story and encouraging the user to find ways to apply them to their situation.

- Links to **Related content** - Hopefully the user is excited about what they've just learned and wants to find out more.

### Referential Content

Referential content answers the question "What are the pieces?" Reference material often contains a certain amount of conceptual material, but the best reason for presenting referential content separately from conceptual content is reuse.

Referential articles should *not* contain procedural content in the form of steps, but can link off to such material.

Referential content is structured as:

- **Title** - should begin with a noun describing the information that's being referenced, followed by how you'd use that thing. For example, "Countries that support SMS for two-factor authentication".

It's always a good idea to link a referential article to a tactical or conceptual article, even if that's in the **Further reading** section at the end of the article.

### Frequently Asked Questions (FAQs)

FAQ articles aim to directly address common questions or misconceptions. These tend to be questions that have known but nuanced answers, such as "Is open source software secure?" or "How do I convince my boss to let me contribute to open source?".

An FAQ tackles a complex topic (such as legal or governance) where a reader likely has specific questions already. Whereas Articles aim to teach an entire concept, an FAQ respects a reader's desire to jump around, get the information they need, and leave. The table of contents is especially important in an FAQ, because the full content isn't meant to be sequential. FAQs might also be longer than articles for this reason.

FAQ content is structured as:

- **Title** should be in the form of a question. The question should be succinct and as close to the most widely asked form of the question, because not every person will ask a question in the same way. For example, "What is open source?", or "How do I make money writing open source software?"

- **Body** should be as brief as possible - answering the question and linking off to more information where appropriate. Ask yourself if the question (the title) could be rephrased to create [conceptual](#conceptual-content) or [tactical](#tactical-content) content.

## Content Elements

Every article contains these elements:

- [Introduction](#introductions)
- [Body](#body)
  - [Pull quote](#pull-quote) (optional)
  - [Image](#image) (optional)
  - [Data Vignette](#data-vignette) (optional)
  - [Trivia](#trivia) (optional)
- [Up Next](#up-next)
- [Further Reading](#further-reading) (optional)

### Introductions

Each piece of content should contain an *introduction*, which is similar to a thesis statement. These allow the reader to decide if they should continue reading or move on to find the information they were actually looking for. Introductions should explain the basic point of the content *without actually referencing the content itself*. For example:

- :smile: "Pull requests are a lightweight way to work on actual files collaboratively without introducing errors to production."
- :cry: "This article should introduce you to the benefits pull requests can introduce to your workflow on GitHub."

Introductions are a delicate balance between showing and telling. Don't *tell* the user what they should learn, let the fact that they learned a new thing be implied.

### Body

The body is the main text of the article. The structure of the body depends on the [content type](#article).

### Pull Quote

Pull quotes are anecdotes that illustrate a point. They make the content more relatable by grounding theoretical concepts in concrete stories. Pull quotes should highlight real people and their experiences.

### Image

Images help visually illustrate a point. Some images are _instructive_, such as a traffic graph or product screenshot. Many of these come from GitHub help content, but these should be kept to a minimum, because this isn't a GitHub how-to. 

Other images are _illustrative_, such as a screenshot of a project's homepage or a conversational exchange. We should have lots of these.

### Data Vignette

Whereas pull quotes and images help ground ideas in something specific and concrete, data vignettes help connect ideas to bigger systems. For example, we might show a chart of the most popular open source licenses, or a graph of the most popular project languages over time.

Data vignettes are limited so as not to overwhelm, but contain just enough information to help readers understand why they should pay attention to a certain idea.

### Trivia

Trivia are fun anecdotes that keep a reader's attention. They build cultural interest through storytelling. For example: _"Did you know that Guido van Rossum started Python over a Christmas holiday?"_

### Up Next

The "Up Next" section offers a teaser of the next article in the suggested sequence. It is automatically generated.

### Further Reading

We never want to leave a user at a dead end, especially in situations where we leave out nuance in pursuit of accessibility. Every piece of content should link to any related information. If another good resource exists on the internet, link to it. Some examples include:

- GitHub Help content for more details on _how_ to do something
- External blog posts, articles, or resources

Related handbook content, and projects or people on GitHub that illustrate concepts, are usually linked inline, rather than in the "Further Reading" section.
