---
title: Details
path: utilities/details
status: Stable
---

Details classes are created to enhance the native behaviors of `<details>`.

{:toc}

## Fullscreen click area

Use `.details-overlay` to expand the click area of `<summary>` to cover the full screen, so user can click anywhere on a page to close `<details>`.

```html
<details class="details-overlay">
  <summary class="btn">More</summary>
  <div class="position-relative bg-white p-3 border" style="z-index: 100">Hidden text</div>
</details>
```

## Darkened fullscreen click area

Use `.details-overlay-dark` darken the click area overlay. Useful for modals.

```html
<details class="details-overlay details-overlay-dark">
  <summary class="btn">More</summary>
  <div class="position-relative bg-white p-3 border" style="z-index: 100">Hidden text</div>
</details>
```
