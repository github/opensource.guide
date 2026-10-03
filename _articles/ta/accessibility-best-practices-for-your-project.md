---
lang: ta
title: உங்க Project-க்கான Accessibility Best Practices
description: உங்க open source project-அ எல்லாரும், முக்கியமா மாற்றுத்திறனாளிகள் ஈஸியா யூஸ் பண்றதுக்கான சூப்பரான வழிகள்.
class: accessibility-best-practices
order: -1
image: /assets/images/cards/accessibility-best-practices.png
---

Accessibility (அடிக்கடி _a11y_ னு சுருக்கி சொல்வாங்க) அப்படீன்னா, குறைபாடுகள், assistive technology, environment அல்லது device-அ தாண்டி உங்க project-அ எல்லாராலயும் யூஸ் பண்ண முடியணும்ங்க. இதுல screen readers, keyboard-only navigation, captions/transcripts, போதுமான color contrast, அப்புறம் தெளிவான content structure எல்லாமே அடங்குங்க.

## மாற்றுத்திறனாளிகள் கூட Partner பண்ணுங்க

**"எங்கள பத்தி எங்களுக்கு இல்லாம எதுவும் இல்ல"** ("Nothing about us without us") - Accessibility-க்காக நீங்க பண்ணக்கூடிய ரொம்ப முக்கியமான விஷயம், அத யூஸ் பண்ற அவிங்கள (people) மையப்படுத்துறது தானுங்க. Guidelines அப்புறம் automated tools-அ விட, மாற்றுத்திறனாளிகளான users, contributors, அப்புறம் testers-க்கு தான் அந்த கஷ்டங்கள் நல்லா புரியும்ங்க. அவங்களோட lived experience-அ சீக்கிரமாவும் அடிக்கடி கேட்டு தெரிஞ்சுக்கோங்க.

### அத Practice-ல கொண்டு வாங்க

பாதிக்கப்படுற அவிங்கள கலந்துக்காம எடுக்குற decisions பெரும்பாலும் சரியா வராதுங்க. மாற்றுத்திறனாளிகளுக்காக (for them) உருவாக்குறத விட, அவிங்க கூட சேர்ந்து (with them) உருவாக்குனா, எல்லாமே சூப்பரான software-ஆ வருங்க.

அவிங்க experience-அ மையப்படுத்துறதுக்கு சில வழிகள் இதோங்க:

* Contributors வித் disabilities-அ வெறும் bug triage-க்கு மட்டும் இல்லாம, design discussions-லையும் கூப்பிடுங்க.
* உங்களால முடியும்போதெல்லாம் usability testing அப்புறம் feedback-க்கு மாற்றுத்திறனாளிகள involve பண்ணுங்க.
* உங்க project-அ அவிங்க எப்டி யூஸ் பண்றாங்கனு சொல்லும்போது, அது உங்க assumptions-அ மாத்துனா கூட பரவாயில்லனு கொஞ்சம் காது கொடுத்து கேளுங்க.
* Accessibility reports-அ complaints-ஆ பாக்காம expertise-ஆ பாருங்க - நீங்க நெனைக்கிறத விட நிறைய பேர்த்த அத represent பண்ணலாங்க.

### Accessibility எல்லாருக்கும் லாபமுங்க

* **இது நெறய பேர்த்த பாதிக்கும்ங்க.** [World Health Organization](https://www.who.int/news-room/fact-sheets/detail/disability-and-health) சொல்றபடி, தோராயமா 1.3 billion மக்கள் (6 ல 1த்தர்) ஏதாவது ஒரு மாற்றுத்திறனோட இருக்காங்க.
* **இது quality-யோட ஒரு பகுதியுங்க.** Accessible products பொதுவாவே எல்லாருக்குமே ஈஸியா யூஸ் பண்ற மாதிரி தானுங்க இருக்கும்.
* **இது support load-அ குறைக்கும்ங்க.** தெளிவான UI அப்புறம் docs இருந்தா குழப்பமான users குறைவா இருப்பாங்க.
* **உங்க contributor base-அ பெருசாக்கும்ங்க.** Assistive tech users-உம் இதுல நல்லா participate பண்ண முடியும்ங்க.
* **இது innovation-அ வளர்க்கும்ங்க.** பலவித தேவைகளுக்கு design பண்றப்போ எல்லாரும் பயனடையற மாதிரி features வருங்க (உதாரணத்துக்கு captions, voice control, dark mode எல்லாமே accessibility solutions-ஆ ஆரம்பிச்சது தானுங்க).
* **இது பெரும்பாலும் கட்டாயமுங்க.** பல orgs (அப்புறம் சில governments) procurement அப்புறம் compliance-க்காக accessibility-அ கட்டாயம் கேக்குறாங்க.
* **நம்ம future நிச்சயமில்லாததுங்க.** இன்னைக்கு நமக்கு இருக்கிற திறன்கள் நாளைக்கும் அப்படியே இருக்கும்னு யாருனாலயும் உறுதியா சொல்ல முடியாதுங்க.

## ஒரு accessibility statement-ஓட ஆரம்பிங்க

Code-குள்ள குதிக்கிறதுக்கு முன்னாடி, உங்க project-ஓட accessibility commitment-அ document பண்ண கொஞ்சம் டைம் ஒதுக்குங்க. Accessibility-ன்றது சும்மா பின்னாடி யோசிக்கிறது இல்ல, அதான் முக்கியம்னு users-க்கும் contributors-க்கும் ஒரு accessibility statement சொல்லுங்க. Guide-க்கு, [W3C's Developing an Accessibility Statement](https://www.w3.org/WAI/planning/statements/)-அ refer பண்ணுங்க.

எதிர்பார்ப்புகள செட் பண்ணி, users-க்கு issues report பண்ண ஈஸியா இருக்குற மாதிரி ஒரு clear statement-அ வைங்க. நீங்க உங்க README-லேயே ஒரு accessibility section-அ சேக்கலாங்க, இல்லனா தனியா ஒரு `ACCESSIBILITY.md` file-அ create பண்ணி, எல்லாருக்கும் தெரியுற மாதிரி README-ல இருந்து link பண்ணலாங்க. இந்த [ACCESSIBILITY.md example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md)-அ refer பண்ணுங்க.

### Goals

* Measurable goals அப்புறம் guidelines-அ சொல்லுங்க (உதாரணத்துக்கு [WCAG AA](https://www.w3.org/TR/WCAG22/#wcag-2-layers-of-guidance) சாத்தியமா இருக்குற இடத்துல).
* உங்க primary priorities, அப்புறம் அத எப்டி மீட் பண்றீங்கனு (keyboard அப்புறம் screen reader support, captions அப்புறம் transcripts, etc.) define பண்ணுங்க.
* ஏதாவது known limitations, அப்புறம் alternative workarounds (இருந்தா) அதையும் define பண்ணுங்க.

### Contributor requirements

Contributors-க்கு என்னென்ன expectations இருக்குனு அவிங்களுக்கு தெளிவான guardrails-அ செட் பண்ணுங்க:

* **Testing:** எல்லா UI changes-உம் ஒரு accessibility testing tool வச்சு (like [Axe DevTools](https://www.deque.com/axe/devtools/extension/#:~:text=Try%20Axe%20DevTools%20Extension%20in%20your%20browser%20of%20choice)) கட்டாயம் test பண்ணிருக்கணுங்க.
* **Documentation:** SVGs, images, அப்புறம் interactive elements-க்கு உங்க project-ஓட accessibility guidelines-அ follow பண்ணுங்க.
* **CI/CD:** Accessibility linting workflow-ல violations ஏதாச்சும் வந்தா PRs fail ஆயிடும்ங்க.

### Supported environments

* நீங்க support பண்ற platforms-அ லிஸ்ட் பண்ணுங்க (web, mobile web, iOS, Android, terminal/CLI, desktop apps).
* Partial-support notes ஏதாச்சும் இருந்தா லிஸ்ட் பண்ணுங்க.

### Accessibility bugs-அ report பண்றது

* Accessibility issue template-அ யூஸ் பண்ணி issues-அ open பண்ண reporters-கிட்ட கேளுங்க.
* **Tip:** Expectations-அ நேர்மையா செட் பண்ணுங்க (உதாரணத்துக்கு "We're working on this - tracking in ISSUE-123"); reports-அ acknowledge பண்ணுங்க, முடிஞ்சப்போ follow-up இல்லனா workaround குடுங்க.

#### ஏன் உங்க general issue process-ல இருந்து accessibility-அ தனியா பிரிக்கணுங்க?

Users தனியா ஒரு accessibility statement அப்புறம் reporting path-அ எதிர்பார்க்க ஆரம்பிச்சுட்டாங்க - இது private sector அப்புறம் government sites-ல ஒரு வழக்கமான convention-ஆ மாறிடுச்சுங்க. ஏதாச்சும் ஒரு barrier வரும்போது பல users முதல அததாங்க தேடுவாங்க. உங்க general issue flow-ல இருந்து accessibility-அ தனியா வச்சிக்கிறது ரொம்ப முக்கியமுங்க ஏன்னா:

* **Impact time-sensitive ஆனதுங்க.** ஒரு accessibility bug, user-அ கொஞ்சம் தொந்தரவு பண்றதோட நிக்காம, உங்க project-அ யூஸ் பண்ண முடியாதபடி block பண்ணிடுங்க. தனி path வச்சா reported issues-அ சீக்கிரமா triage பண்ண உதவுங்க.
* **Context வேற மாதிரி இருக்குங்க.** Accessibility reported issues-க்கு specific information தேவையுங்க (assistive tech, OS, browser, severity), அத ஒரு generic bug template கேட்காதுங்க.
* **இது commitment-அ காட்டுதுங்க.** ஒரு தனியான, கண்ணுக்கு தெரியுற statement, users அப்புறம் contributors-க்கு accessibility-ங்கிறது first-class concern, "other bugs" குள்ள போடுற விஷயம் இல்லனு காட்டுங்க.
* **Reporters அந்த report-அ file பண்ணவே assistive technology யூஸ் பண்ணலாங்க.** ஒரு clear, predictable process (ஒரு known file, known label, known template) ரொம்ப பாதிக்கப்பட்டவங்களுக்கு ஈஸியா இருக்குங்க.

## Docs-அ default-ஆ accessible ஆக்குங்க

Documentation தாங்க users தொடுற முதல் "UI". அத எல்லாராலயும் படிக்க முடியுதான்னு பாத்துக்கோங்க.

### Structure and semantics

* ஒரு logical **heading hierarchy**-அ யூஸ் பண்ணுங்க, levels-அ தாண்டிப் போகாதீங்க (`#`, `##`, `###`, `####`, `#####`, and `######`).
* Unique, descriptive **link text**-அ யூஸ் பண்ணுங்க ("click here" னு சொல்லாம "Read the contributing guide" னு சொல்லுங்க).
* **Plain language**-அ யூஸ் பண்ணுங்க, jargon-அ தவிர்த்துடுங்க, அப்புறம் abbreviation-அ முதல் தடவ யூஸ் பண்ணும்போது expand பண்ணுங்க.
* Manual-ஆ நம்பர் போடுறத விட, [**Real lists**](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists)-அ யூஸ் பண்ணுங்க.
* எல்லாரும் ஈஸியா கண்டுபிடிக்கிற மாதிரி, pages முழுக்க help அப்புறம் navigation-அ ஒரே இடத்துல (consistent locations) வைங்க.
* வெறும் position இல்லனா styling வச்சு மட்டும் meaning convey பண்றத தவிர்த்துடுங்க ("see the red text on the right" அப்டின்னு சொல்லாதீங்க).

### Images, diagrams and videos

* Images-க்கு அர்த்தமுள்ள **alternative text** (அடிக்கடி "alt text" னு சுருக்குவாங்க) குடுங்க ([W3C's alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)-அ refer பண்ணுங்க).
* Text இருக்குற images-அ யூஸ் பண்றத விட, முடிஞ்சவரைக்கும் real text-அ யூஸ் பண்ணுங்க.
* Complex images-க்கு (architecture diagrams மாதிரி), பக்கத்துலேயே ஒரு additional text alternative-அ சேருங்க (bullets இல்லனா ஒரு சின்ன explanation).
* நீங்க demos, tutorials, talks, இல்லனா release videos publish பண்ணுனா:
  * **Captions** குடுங்க (முடிஞ்ச வரைக்கும் human-edited-ஆ குடுங்க).
  * ஒரு **transcript** குடுங்க.
  * Audio அப்புறம் video auto-play ஆகுறத தவிர்த்துடுங்க.
  * முக்கியமான on-screen actions-அ வாய் வார்த்தையா (verbally) describe பண்ணுங்க.

### Tables

* Tables-அ tabular data-க்கு மட்டும் யூஸ் பண்ணுங்க, layout-க்கு வேண்டாங்க.
* Column அப்புறம் row headers-அ data cells-ஓட இணைக்க **header cells** குடுங்க.
* Table-ஓட purpose-அ describe பண்ற மாதிரி ஒரு **caption இல்லனா summary** குடுங்க.

### Code blocks

* Lines-அ ரொம்ப நீளமாக்காம பாத்துக்கோங்க (wrapping readability-க்கு உதவுங்க).
* Meaning-அ காட்ட வெறும் color highlighting-அ மட்டும் நம்பி இருக்காதீங்க.
* Code என்ன பண்ணுது அப்புறம் success எப்டி இருக்கும்னு inline-ல explain பண்ணுங்க.

## Accessible interfaces-அ Design பண்ணுங்க

உங்க project-ல ஒரு web UI இருந்தா, இந்த high-impact defaults எல்லா users-க்கும் ஹெல்ப் பண்ணும்ங்க.

### Keyboard support

* Interactive-ஆ இருக்குற எல்லாமே keyboard only மூலமா reach பண்ணவும் யூஸ் பண்ணவும் முடியணுங்க.
* ஒரு **visible focus indicator** இருக்குறத confirm பண்ணுங்க (focus outlines-அ replace பண்ணாம அத எடுக்காதீங்க).
* Visual layout-க்கு match ஆகுற மாதிரி ஒரு logical **tab order**-அ மெயின்டெயின் பண்ணுங்க.
* நீங்க intentionally focus-அ மேனேஜ் பண்ணி (modal dialogs மாதிரி) வெளிய வர வழி குடுத்தா தவிர, components-குள்ள focus-அ trap பண்ணாதீங்க.

### Semantics first

* முடிஞ்சபோதெல்லாம் **native HTML** elements (`<h1>`, `<button>`, `<a>`, `<input>`, `<label>`)-அ யூஸ் பண்ணுங்க.
* Native HTML பத்தாதப்போ மட்டும் **ARIA**-அ யூஸ் பண்ணுங்க. Bad ARIA-க்கு ARIA இல்லாமயே இருக்கலாங்க. நீங்க அத யூஸ் பண்ணும்போது, [Accessible Rich Internet Applications (ARIA) documentation](https://www.w3.org/TR/wai-aria/)-அ follow பண்ணுங்க அப்புறம் எல்லா interactive ARIA controls-உம் keyboard accessible-ஆ இருக்குறத உறுதி பண்ணிக்கோங்க.
* உங்க document-ஓட **language**-அ declare பண்ணுங்க (HTML-ல `lang="en"` மாதிரி) அப்புறம் வேற language-ல இருக்குற sections-அ mark up பண்ணுங்க.

### Names, labels, instructions

* ஒவ்வொரு form control-க்கும் associated **label** தேவையுங்க.
* Clear **error messages** குடுங்க, எந்த field-ல error இருக்குனு காட்டுங்க, அப்புறம் programmatically அந்த message-அ field-ஓட associate பண்ணுங்க (like `aria-describedby`).
* Required fields-க்கு, requirements-அ text-ல explain பண்ணுங்க (வெறும் asterisk மட்டும் வச்சா பத்தாதுங்க).

### Color and contrast

* மீனிங்க convey பண்ண color-அ மட்டும் ஒரே method-ஆ யூஸ் பண்ணாதீங்க ("errors are red" மாதிரி).
* Text, icons, அப்புறம் UI controls-க்கு போதுமான **contrast** இருக்குறத confirm பண்ணுங்க ([WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/)-அ refer பண்ணுங்க).

### Motion and animation

* Flashing content அப்புறம் rapid animations-அ தவிர்த்துடுங்க.
* Parallax effects அப்புறம் auto-advancing carousels-அ தவிர்த்துடுங்க, இல்லனா அத optional-ஆவும் controllable-ஆவும் ஆக்குங்க.
* User reduced இல்லனா zero motion கேட்டிருக்காங்கனு operating system காட்டுச்சுன்னா, unnecessary animation-அ தவிர்த்துடுங்க.

### Dynamic content

Page load ஆகாம content updates ஆகுறப்போ, assistive tech users-க்கு அத பத்தி தெரியப்படுத்திருங்க:

* Announcements-க்கு appropriate **ARIA live regions**-அ அளவா யூஸ் பண்ணுங்க.
* Dialogs, menus, அப்புறம் drawers-அ open/close பண்ணும்போது **focus**-அ manage பண்ணுங்க.

### Dependencies and patterns

* Documented accessibility support இருக்குற component libraries-அ யூஸ் பண்ணுங்க.
* Accessibility bugs-அ upstream-ல track பண்ணி அத உங்க issues-ல link பண்ணுங்க.
* Custom UI controls வச்சு கொஞ்சம் கவனமா இருங்க. Native controls (like `<button>`, `<select>`, `<input type="checkbox">`, `<details>`) built-in keyboard support, focus management, screen reader semantics, அப்புறம் form integration-ஓட வருங்க, இத browsers அப்புறம் assistive technologies எல்லாமே ஏற்கனவே புரிஞ்சுக்குங்க. Custom components-ல அந்த behavior-அ recreate பண்றது time-consuming, தப்பு பண்ண வாய்ப்பு அதிகம், அப்புறம் platforms அப்புறம் assistive tech வளர வளர அது long-term maintenance cost-அ சேக்கும்ங்க. ஒரு native element-ஆல உண்மையிலுமே தேவையை பூர்த்தி செய்ய முடியாதப்போ மட்டும் custom controls-அ தொடுங்க.

### Mobile considerations

* Touch targets-அ குறைஞ்சது 24×24 CSS pixels ஆக்குங்க.
* Multipoint இல்லனா path-based gestures-க்கு (pinch, swipe) single-pointer alternatives குடுங்க.
* Drag-and-drop operations-க்கு alternatives (buttons, menus) குடுங்க.
* Display பண்ண வேண்டிய content ஒரு specific orientation-ல தான் இருக்கணும்னா தவிர, content-அ single display orientation-க்கு மட்டும் restrict பண்ணாதீங்க.
* Device motion-ஆல trigger ஆகுற features-க்கு alternatives குடுங்க (shake to undo மாதிரி).

## Tools-அ accessible ஆக்குங்க

Command line tools அப்புறம் dashboards-அ நல்லா யோசிச்சு design பண்ணா அதுவும் செம accessible-ஆ இருக்குங்க.

### CLI Tools

Command line apps predictable ஆவும் scriptable ஆவும் இருக்கும்போது, அது highly accessible-ஆ இருக்குங்க.

* Clear usage examples-ஓட `--help`-க்கு support பண்ணுங்க.
* Tables-அ ஈஸியா parse பண்ண முடியாத users-க்கு machine-readable output options (like `--json`) குடுங்க.
* Success/failure-அ காட்ட ANSI color-அ மட்டும் நம்பி இருக்காதீங்க; text labels அப்புறம் exit codes-அ சேருங்க.
* இப்டி error messages எழுதுங்க:
  * என்ன ஆச்சுனு explain பண்ணுங்க,
  * அத எப்டி fix பண்றதுனு காட்டுங்க, அப்புறம்
  * தேவைப்பட்டா docs-க்கு link பண்ணுங்க.
* Standard exit codes-அ யூஸ் பண்ணுங்க, failure வந்தா non-zero இருக்குறத confirm பண்ணுங்க.

### Terminals, logs, and dashboards

* Jargon-அ விட plain language-அ prefer பண்ணுங்க.
* Explanation இல்லாம abbreviations யூஸ் பண்றத தவிர்த்துடுங்க.
* Severity levels-க்கு (`ERROR`, `WARN`, `INFO`) consistent formatting யூஸ் பண்ணுங்க அப்புறம் யூஸ்ஃபுல்லா இருந்தா timestamps-அ சேருங்க.
* "status" வெறும் color-ல மட்டும் communicate ஆகலங்கிறத உறுதி பண்ணிக்கோங்க.

## Contribution workflows-ல accessibility-அ பில்ட் பண்ணுங்க

Accessibility-அ உங்க regular process-ல ஒரு பகுதியா வச்சுக்கிட்டா அத maintain பண்றது ஈஸிங்க.

### Issue labels அப்புறம் template-அ add பண்ணுங்க

* ஒரு accessibility label-அ create பண்ணுங்க (like "accessibility" or "a11y").
* இதெல்லாம் இருக்குற மாதிரி ஒரு accessibility issue template-அ create பண்ணுங்க:
  * The accessibility label
  * Expected versus actual behavior
  * Reproduce பண்றதுக்கான steps (ஒரு optional screen recording சேத்து)
  * Tools used (OS, browser, assistive technology and version)
  * Issues-அ prioritize பண்ண உதவும் Severity taxonomy:
    * **Critical:** ஒரு core task-அ complete பண்றதுல இருந்து user-அ தடுக்குறது (like "Cannot checkout").
    * **High:** ரொம்ப கஷ்டம், ஆனா workaround இருக்குது.
    * **Medium:** தொந்தரவு இல்லனா inconsistent experience.
    * **Low:** Usability-ல சின்ன impact குடுக்குற minor issue.
  * Contact இல்லனா escalation instructions (தேவைப்பட்டா).

இந்த [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml)-அ refer பண்ணுங்க.

### Pull requests (PRs)-ல ஒரு accessibility checklist-அ add பண்ணுங்க

UI changes இருக்குற projects-க்கு, இது மாதிரி கேள்விகள சேருங்க:

* Keyboard navigation end-to-end வொர்க் ஆகுது
* Focus states visible-ஆவும் logical-ஆவும் இருக்கு
* Forms-ல labels இருக்கு அப்புறம் errors announce ஆகுது
* Color மட்டுமே meaning-அ convey பண்ற ஒத்த method இல்ல
* Reduced motion மதிக்கப்படுது (animations add பண்ணியிருந்தா)
* Screen reader behavior செக் பண்ணாச்சு (குறைஞ்சது ஒரு தடவையாச்சும்)

இந்த [PR template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md)-அ refer பண்ணுங்க.

### "Done"-அ Define பண்ணுங்க

Features அப்புறம் bug fixes-க்கு accessibility acceptance criteria-அ add பண்ணுங்க, அப்போதான் அது optional இல்லனா last-minute வேலையா இருக்காதுங்க.

### GitHub Copilot-அ Leverage பண்ணுங்க

* உங்க development workflow-ல accessibility tasks-அ automate பண்ற specialized Copilot agents-அ create பண்ணுங்க, அதாவது [axe-core](https://github.com/dequelabs/axe-core) வச்சு pages-அ audit பண்றதுல இருந்து releases முழுக்க accessibility improvements-அ track பண்றது வரைக்குங்க. [Getting Started with GitHub Copilot Custom Agents for Accessibility Guide](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)-அ refer பண்ணுங்க.
* உங்க accessibility requirements-ஓட align ஆகுற மாதிரி, Copilot-ஓட suggestions-அ உங்க coding style, accessibility practices, அப்புறம் project context-க்கு ஏத்த மாதிரி மாத்தி அமைங்க. [Optimizing GitHub Copilot for Accessibility with Custom Instructions Guide](https://accessibility.github.com/documentation/guide/copilot-instructions/)-அ refer பண்ணுங்க.

### Accessibility reported issues-அ மரியாதையாவும் எஃபெக்டிவ் ஆவும் ஹேண்டில் பண்ணுங்க

Accessibility issues-அ describe பண்றது கஷ்டம்ங்க, reproduce பண்றதும் கஷ்டம்ங்க, அப்புறம் reporter உங்க project-அ யூஸ் பண்றதுக்கு அது time-sensitive ஆனதுங்க. Reports-அ handle பண்ணும்போது:

* Reporter-க்கு நன்றி சொல்லுங்க அப்புறம் எந்த சந்தேகமும் படாம clarifying questions கேளுங்க.
* Cosmetic issues-அ விட blockers-க்கு (core flow-அ complete பண்ண முடியாதுங்கிற மாதிரி) priority குடுங்க.
* முடிஞ்சப்போலாம் workarounds குடுங்க.
* Close the loop: அவங்களுக்கு ஓகே-னா fixes-அ reporter-கிட்ட கன்ஃபார்ம் பண்ணிக்கோங்க.

## கன்டினியூஸா accessibility-அ test பண்ணுங்க

Automated tools regressions-அ கண்டுபுடிச்சுடுங்க, ஆனா manual testing தான் நிஜமான confidence-அ குடுக்கும்ங்க.

### Automated checks (regressions-அ கண்டுபுடிக்க சூப்பருங்க)

* UI code-ல accessibility-க்கு **Linting** பண்றது.
* Common WCAG failures-க்காக CI-ல **Automated scanning** பண்றது (like the [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner)).
* Key components-க்கான [roles/names](https://www.w3.org/TR/accname-1.2/)-அ assert பண்ற **Unit/integration tests**.

### Manual testing (நிஜமான confidence-க்கு கட்டாயமுங்க)

* **Keyboard-only pass:** mouse இல்லாமலே உங்களால main flows-அ successfully operate பண்ண முடியுதான்னு பாருங்க.
* **Screen reader spot check:**
  * macOS: [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac)
  * Windows: [NVDA](https://www.nvaccess.org/about-nvda/) (open source-ல காமன்ங்க), [JAWS](https://vispero.com/jaws-screen-reader-software/) (enterprise)
* **Zoom and reflow:** 200% அப்புறம் narrow widths-ல test பண்ணுங்க.
* Applicable-ஆ இருக்குற இடத்துல **High contrast / forced colors** modes-ல test பண்ணுங்க.

**Tip:** உங்க release checklist-ல ஒரு lightweight "Accessibility [smoke test](https://en.wikipedia.org/wiki/Smoke_testing_(software))" section-அ add பண்ணுங்க.

## இந்த வாரம் சின்ன சின்ன வெற்றிகள்ல இருந்து ஆரம்பிங்க

### நீங்க எல்லாத்தையும் ஒரே நேரத்துல பண்ணணும்னு அவசியமில்லீங்க, கொஞ்சமா quick improvements-ல இருந்து ஆரம்பிங்க.

சிலத மட்டும் பிக் பண்ணுங்க:

* `ACCESSIBILITY.md` அப்புறம் ஒரு accessibility label-அ add பண்ணுங்க (like "accessibility" or "a11y")
* ஒவ்வொரு interactive element-உம் keyboard மூலமா reach ஆகுதான்னு confirm பண்ணுங்க
* Missing form labels-அ fix பண்ணுங்க
* உங்க document-ஓட language-அ declare பண்ணுங்க (HTML-ல `lang="en"` மாதிரி) அப்புறம் வேற language-ல இருக்குற sections-அ mark up பண்ணுங்க
* README அப்புறம் docs-ல alt text அப்புறம் heading structure-அ add பண்ணுங்க
* Keyboard/focus-க்காக ஒரு PR checklist item-அ add பண்ணுங்க
* உங்களோட most popular video-க்கு captions/transcript-அ add பண்ணுங்க
* ஒரு CLI command-க்கு `--json` output-அ add பண்ணுங்க

### உங்க accessibility commitment-அ formalize பண்ண உதவும் Suggested file additions.

உங்க repo-ல இதெல்லாம் add பண்ண கன்சிடர் பண்ணுங்க:

* `ACCESSIBILITY.md`: உங்க accessibility statement, issues-அ எப்டி report பண்றது, அப்புறம் project-specific guidance (component rules, patterns, known issues) ஏதாச்சும் இருந்தா - [ACCESSIBILITY.md example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/ACCESSIBILITY.md)
* `.github/ISSUE_TEMPLATE/accessibility.yml`: accessibility bug reports-க்கு - [accessibility issue template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/ISSUE_TEMPLATE/accessibility.yml)
* `.github/pull_request_template.md`: ஒரு a11y checklist-அ include பண்ணுங்க - [PR template example](https://github.com/open-source-accessibility/accessibility-toolkit/blob/main/.github/PULL_REQUEST_TEMPLATE.md)

Additional examples-க்கு இந்த [project](https://github.com/mgifford/ACCESSIBILITY.md/tree/main)-அ refer பண்ணுங்க.

## Conclusion: உங்களுக்கான சில படிகள், உங்க users-க்கு ஒரு பெரிய improvement-ஆ இருக்குங்க

இந்த steps பாக்க basic-ஆ தெரியலாங்க, ஆனா உங்க project-அ இன்னுமே accessible ஆக்க இது ரொம்ப தூரம் கை குடுக்கும்ங்க. நீங்க பண்ற ஒவ்வொரு fix-உம், அது ஒரு missing label-ஆ இருக்கட்டும், ஒரு keyboard trap-ஆ இருக்கட்டும், இல்லனா ஒரு video-ல போடுற caption-ஆ இருக்கட்டும், அது இதுக்கு முன்னாடி உங்க project-அ யூஸ் பண்ண முடியாத ஒருத்தருக்கு புது வழிய திறந்து விடுமுங்க.

Accessibility-ங்கிறது ஒரு தடவ fix பண்ணிட்டு விடுற விஷயம் இல்லீங்க, அது ஒரு தொடர்ச்சியான practice-ங்க, நீங்க எல்லாத்தையும் ஒரே நேரத்துல பண்ணணும்னு அவசியமில்லீங்க. Keyboard navigation அப்புறம் semantics-ல இருந்து ஆரம்பிங்க, சின்ன சின்ன changes-ஆ பண்ணுங்க, அப்புறம் சீக்கிரமாவே review கேளுங்க.

நீங்க இன்னைக்கு போடுற எஃபோர்ட், நீங்க உருவாக்குறத இன்னும் நெறய பேரு கத்துக்கவும், contribute பண்ணவும், அப்புறம் நம்பி இருக்கவும் வழிவகுக்குமுங்க. அது கொண்டாடுறதுக்கு தகுதியான ஒரு வெற்றி தானுங்க.

## Contributors

### இந்த guide-க்காக தங்களோட அனுபவங்களையும் tips-யும் எங்ககூட share பண்ணிக்கிட்ட எல்லா maintainers-க்கும் ரொம்ப தேங்க்ஸ்ங்க!

இந்த guide-அ [@mlama007](https://github.com/mlama007) எழுதுனாங்க, கூட இவிங்களும் contribute பண்ணிருக்காங்க: [@ericwbailey](https://github.com/ericwbailey), [@andyfeller](https://github.com/andyfeller), [@mgifford](https://github.com/mgifford), [@smockle](https://github.com/smockle), அப்புறம் [@weboverhauls](https://github.com/weboverhauls). தமிழ்ல (கொங்கு வழக்கு) மொழிபெயர்த்தது [@ajaitech](https://github.com/ajaitech).
