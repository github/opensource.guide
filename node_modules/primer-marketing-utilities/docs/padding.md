---
title: Marketing Padding
status: New release
status_issue: https://github.com/github/design-systems/issues/378
---

Marketing padding utilities extend [core margin utilities](../../support/spacing) across the y-axis only. The [marketing scale](../../support/marketing-variables/#extended-spacing-scale) starts from spacer 7 up to 12, and steps first by `8px` for spacer 7 and continues in increments of `16px` for spacer 8 to 12.

## Y-axis padding utilities

Use marketing padding utilities to apply padding to top, bottom, or both y-axis of an element. These utilities can change or override default padding, and can be used with a spacing scale of 7-12.

```html
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pt-7">.pt-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pb-7">.pb-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue py-7">.py-7</div>
</div>
```

## Responsive y-axis padding utilities

All marketing padding utilities can be adjusted per [breakpoint](../../objects/grid#breakpoints) using the following formula: `p[y-direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html
<div class="d-inline-block margin-orange">
  <div class="py-sm-7 pb-lg-9 d-inline-block block-blue">
    .py-sm-7 .pb-lg-9
  </div>
</div>
```
