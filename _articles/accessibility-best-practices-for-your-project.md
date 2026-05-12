---
lang: en
untranslated: true
title: Accessibility Best Practices for Your Project
description: Practical, actionable steps to make your open source project usable by everyone, especially people with disabilities.
class: accessibility-best-practices
order: -1
image: /assets/images/cards/accessibility-best-practices.png
---

Accessibility (often shortened to _a11y_) means people can use your project regardless of disability, assistive technology, environment, or device. It includes - but isn't limited to - support for screen readers, keyboard-only navigation, captions/transcripts, sufficient color contrast, and clear content structure.

## Partner with people with disabilities

**"Nothing about us without us"** - The most important thing you can do for accessibility is to center the people it serves. Users, contributors, and testers with disabilities understand barriers in ways that guidelines and automated tools cannot. Seek out their lived experience early and often.

### Put it into practice

Decisions made without the people affected by them tend to miss the mark. Building with people with disabilities, rather than for them, leads to better software for everyone.

Here are a few ways to center lived experience:

* Invite contributors with disabilities into design discussions, not just bug triage.
* Involve people with disabilities for usability testing and feedback when you can.
* Listen when someone describes how they use your project, even when it challenges your assumptions.
* Treat accessibility reports as expertise, not complaints - they may represent more people than you think.

### Accessibility benefits everyone

* **It impacts a lot of people.** An estimated 1.3 billion people (1 in 6) experience significant disability, according to the [World Health Organization](https://www.who.int/news-room/fact-sheets/detail/disability-and-health).
* **It's part of quality.** Accessible products tend to be more usable for everyone.
* **It reduces support load.** Clearer UI and docs mean fewer confused users.
* **It expands your contributor base.** Assistive tech users can more fully participate.
* **It drives innovation.** Designing for diverse needs often leads to features that benefit everyone (like captions, voice control, and dark mode all began as accessibility solutions).
* **It's often required.** Many orgs (and some governments) require accessibility for procurement and compliance.
* **Our future is uncertain.** Nobody today can be confident about the abilities we will have tomorrow.

## Start with an accessibility statement

Before diving into code, take a moment to document your project's accessibility commitment. An accessibility statement signals to users and contributors that accessibility is a priority, not an afterthought. For guidance, refer to the [W3C's Developing an Accessibility Statement](https://www.w3.org/WAI/planning/statements/).

Add a clear statement that sets expectations and makes it easy for users to report issues. You can either add an accessibility section directly in your README, or create a dedicated **ACCESSIBILITY.md** file and link to it from your README for visibility. Refer to this [ACCESSIBILITY.md example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md).

### Goals

* State measurable goals (like [WCAG AA](https://www.w3.org/TR/WCAG22/#wcag-2-layers-of-guidance) where feasible).
* Primary priorities, and how you meet them (keyboard and screen reader support, captions and transcripts, etc.).
* Any known limitations, and alterative workarounds (if present).

### Contributor requirements

Establish clear guardrails so contributors know what's expected:

* **Testing:** All UI changes must be tested with an accessibility testing tool (like [Axe DevTools](https://www.deque.com/axe/devtools/extension/#:~:text=Try%20Axe%20DevTools%20Extension%20in%20your%20browser%20of%20choice)).
* **Documentation:** Follow your project's accessibility guidelines for components like SVGs, images, and interactive elements.
* **CI/CD:** PRs will fail if they introduce violations detected by the accessibility linting workflow.

### Supported environments

* List platforms you support (web, mobile web, iOS, Android, terminal/CLI, desktop apps).
* List any partial-support notes.

### Reporting accessibility bugs

* Ask reporters to open issues using the accessibility issue template.
* **Tip:** Set expectations honestly (like "We're working on this - tracking in ISSUE-123"); acknowledge reports and provide follow-up or workaround when possible.

#### Why separate accessibility from your general issue process?

Users have come to expect a dedicated accessibility statement and reporting path - it's a well-established convention in the private sector and across government sites, and many users look for it first when they hit a barrier. Keeping accessibility distinct from your general issue flow matters because:

* **Impact is time-sensitive.** An accessibility bug can block a user from using your project at all, not just inconvenience them. A dedicated path helps these reported issues get triaged faster.
* **Context is different.** Accessibility reported issues need specific information (assistive tech, OS, browser, severity) that a generic bug template doesn't prompt for.
* **It signals commitment.** A visible, separate statement tells users and contributors that accessibility is a first-class concern, not something folded into "other bugs."
* **Reporters may use assistive technology to file the report itself.** A clear, predictable process (a known file, a known label, a known template) reduces friction for the people most affected.

## Make docs accessible by default

Documentation is often the first "UI" users touch. Make sure everyone can read it.

### Structure and semantics

* Use a **logical heading hierarchy** and don't skip levels (`#`, `##`, `###`, `####`, `#####`, and `######`).
* Use **unique, descriptive link text** ("Read the contributing guide" instead of "click here").
* Use plain language, avoiding jargon and expanding any abbreviation the first time it is used.
* [Use **real lists**](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists) over manually typed numbering.
* Keep **help and navigation in consistent locations** across pages so users can find them predictably.
* Avoid conveying meaning only through position or styling ("see the red text on the right").

### Images, diagrams and videos

* Provide meaningful **alternative text** (often shortened to "alt text") for images (refer to the [W3C's alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)).
* Instead of using images of text, use real text whenever possible.
* For complex images (like architecture diagrams), include an additional **text alternative** nearby (bullets or a short explanation).
* If you publish demos, tutorials, talks, or release videos:
  * Provide **captions** (prefer human-edited when possible).
  * Provide a **transcript**.
  * Avoid auto-playing audio and video.
  * Describe important on-screen actions verbally.

### Tables

* Use tables only for tabular data, not for layout.
* Include **header cells** (`<th>`) and use `scope` attributes to associate headers with data cells.
* Provide a **caption or summary** describing the table's purpose.

### Code blocks

* Keep lines reasonably short (wrapping helps readability).
* Don't rely on color highlighting alone to indicate meaning.
* Explain inline what the code does and what success looks like.

## Design accessible Interfaces

If your project has a web UI, these high-impact defaults will help all users.

### Keyboard support

* Everything interactive should be reachable and usable with **keyboard only**.
* Ensure a **visible focus indicator** (don't remove focus outlines unless you replace them).
* Maintain a logical **tab order** that matches the visual layout.
* Don't trap focus inside components unless you intentionally manage focus (like modal dialogs) and provide a way out.

### Semantics first

* Use native HTML elements (`<h1>`, `<button>`, `<a>`, `<input>`, `<label>`) when possible.
* Use ARIA only when native HTML isn't sufficient. No ARIA is better than bad ARIA. When you do use it, follow the [Accessible Rich Internet Applications (ARIA) documentation](https://www.w3.org/TR/wai-aria/) and ensure all interactive ARIA controls are keyboard accessible.
* Declare the **language** of your document (like `lang="en"` in HTML) and mark up any sections in a different language.

### Names, labels, instructions

* Every form control needs an associated **label**.
* Provide **clear error messages**, indicate which field has the error, and programmatically associate the message with the field (like `aria-describedby`).
* For required fields, explain requirements in text (not only an asterisk).

### Color and contrast

* Don't use color as the only method to convey meaning ("errors are red").
* Ensure adequate contrast for text and UI controls (refer to [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/)).

### Motion and animation

* Avoid flashing content and rapid animations.
* Avoid parallax effects and auto-advancing carousels, or make them optional and controllable.

### Dynamic content

When content updates without a page load, ensure assistive tech users are informed:

* Use appropriate **ARIA live regions** sparingly for announcements.
* Manage focus when opening/closing dialogs, menus, and drawers.

### Dependencies and patterns

* Use component libraries with documented accessibility support.
* Track accessibility bugs upstream and link to them in your issues.
* Be cautious with custom UI controls. Native controls (like `<button>`, `<select>`, `<input type="checkbox">`, `<details>`) come with built-in keyboard support, focus management, screen reader semantics, and form integration that browsers and assistive technologies already understand. Recreating that behavior in custom components is time-consuming, easy to get wrong, and adds long-term maintenance cost as platforms and assistive tech evolve. Reach for custom controls only when a native element genuinely can't meet the need.

### Mobile considerations

* Make touch targets at least **24×24 CSS pixels**.
* Provide single-pointer alternatives for multipoint or path-based gestures (pinch, swipe).
* Offer alternatives for drag-and-drop operations (buttons, menus).
* Don't restrict content to a single display orientation, unless the content being displayed needs to use a specific orientation.
* Provide alternatives for features triggered by device motion (like shake to undo).

## Make tools accessible

Command line tools and dashboards can be highly accessible when designed thoughtfully.

### CLI Tools

Command line apps can be highly accessible when they're predictable and scriptable.

* Support `--help` with clear usage examples.
* Provide **machine-readable output** options (like `--json`) for users who can't easily parse tables.
* Avoid relying solely on ANSI color to convey success/failure; include text labels and exit codes.
* Write error messages that:
  * Explain what happened,
  * Show how to fix it, and
  * Link to docs if needed.
* Use standard exit codes and ensure non-zero on failure.

### Terminals, logs, and dashboards

* Prefer plain language over jargon.
* Avoid abbreviations without explanation.
* Use consistent formatting for severity levels (`ERROR`, `WARN`, `INFO`) and include timestamps when useful.
* Ensure that "status" isn't communicated only with color.

## Build accessibility into contribution workflows

Accessibility is easier to maintain when it's part of your regular process.

### Add issue labels and template

* Create an accessibility label (like _"accessibility"_ or _"a11y"_).
* Create an accessibility issue template that includes:
  * The _accessibility_ label
  * Expected versus actual behavior
  * Steps to reproduce (including an optional screen recording)
  * Tools used (OS, browser, assistive technology and version)
  * Severity taxonomy to help prioritize issues:
    * **Critical:** Prevents a user from completing a core task (like "Cannot checkout").
    * **High:** Significant difficulty, but a workaround exists.
    * **Medium:** Annoyance or inconsistent experience.
    * **Low:** Minor issue with minimal impact on usability.
  * Contact or escalation instructions if appropriate.

Refer to this [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml).

### Add an accessibility checklist to pull requests (PRs) 

For projects with UI changes, include questions such as:

* Keyboard navigation works end-to-end
* Focus states are visible and logical
* Forms have labels and errors are announced
* Color isn't the only indicator
* Reduced motion is respected (if animations were added)
* Screen reader behavior was checked (at least once)

Refer to this [PR template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md).

### Define "done"

Add accessibility acceptance criteria for features and bug fixes, so it's not optional or last-minute.

### Leverage GitHub Copilot

* Create specialized Copilot agents that automate accessibility tasks in your development workflow, from auditing pages with [axe-core](https://github.com/dequelabs/axe-core) to tracking accessibility improvements across releases. Refer to the [Getting Started with GitHub Copilot Custom Agents for Accessibility Guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)
* Tailor Copilot's suggestions to your coding style, accessibility practices, and project context to ensure they align with your accessibility requirements. Refer to the [Optimizing GitHub Copilot for Accessibility with Custom Instructions Guide](https://accessibility.github.com/documentation/guide/copilot-instructions/).

### Handle accessibility reported issues respectfully and effectively

Accessibility issues are often hard to describe, hard to reproduce, and time-sensitive for the reporter's ability to use your project. When handling reports:

* Thank the reporter and ask clarifying questions without skepticism.
* Prioritize blockers (can't complete a core flow) over cosmetic issues.
* Provide workarounds when possible.
* Close the loop: confirm fixes with the reporter if they're willing.

## Test accessibility continuously

Automated tools catch regressions, but manual testing builds real confidence.

### Automated checks (good at catching regressions)

* Linting for accessibility in UI code.
* Automated scanning in CI for common WCAG failures (like the [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner)).
* Unit/integration tests that assert [roles/names](https://www.w3.org/TR/accname-1.2/) for key components.

### Manual testing (required for real confidence)

* **Keyboard-only** pass: can you successfully operate the main flows of your experience without a mouse?
* **Screen reader** spot check:
  * macOS: [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac)
  * Windows: [NVDA](https://www.nvaccess.org/about-nvda/) (common in open source), [JAWS](https://vispero.com/jaws-screen-reader-software/) (enterprise)
* **Zoom and reflow**: test at 200% and with narrow widths.
* **High contrast / forced colors** modes where applicable.

**Tip:** Add a lightweight "Accessibility [smoke test](https://en.wikipedia.org/wiki/Smoke_testing_(software))" section to your release checklist.

## Start with small wins this week

### You don't have to do everything at once, start with a few quick improvements.

Pick a few:

* Add `ACCESSIBILITY.md` and an accessibility label (like _"accessibility"_ or _"a11y"_)
* Ensure every interactive element is keyboard reachable
* Fix missing form labels
* Declare the **language** of your document (like `lang="en"` in HTML) and mark up any sections in a different language
* Add alt text and heading structure to the README and docs
* Add a PR checklist item for keyboard/focus
* Add captions/transcript to your most popular video
* Add `--json` output to a CLI command

### Suggested file additions to help formalize your accessibility commitment.

Consider adding these to your repo:

* `ACCESSIBILITY.md`: your accessibility statement, how to report issues, and any project-specific guidance (component rules, patterns, known issues) - [ACCESSIBILITY.md example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md)
* `.github/ISSUE_TEMPLATE/accessibility.yml`: accessibility bug reports - [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml)
* `.github/pull_request_template.md`: include an a11y checklist - [PR template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md)

Refer to this [project for additional examples](https://github.com/mgifford/ACCESSIBILITY.md/tree/main).

## Conclusion: A few steps for you, a huge improvement for your users

These steps might seem basic, but they go a long way to make your project more accessible. Every fix you make, whether it's a missing label, a keyboard trap, or a caption on a video, opens the door for someone who couldn't use your project before. 

Accessibility isn't a one-time fix, it's an ongoing practice, and you don't have to do it all at once. Start with keyboard navigation and semantics, keep changes small, and ask for review early. 

The work you put in today means more people can learn from, contribute to, and rely on what you build. That's a win worth celebrating.

## Contributors

### Many thanks to all the maintainers who shared their experiences and tips with us for this guide!

This guide was written by [@mlama007](https://github.com/mlama007) with contributions from: [@ericwbailey](https://github.com/ericwbailey), [@andyfeller](https://github.com/andyfeller), [@mgifford](https://github.com/mgifford), [smockle](https://github.com/smockle), and [weboverhauls](https://github.com/weboverhauls)
