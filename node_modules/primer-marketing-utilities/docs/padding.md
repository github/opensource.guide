---
title: Marketing Padding
sort_title: Padding Marketing
path: utilities/marketing-padding
status: Stable
status_issue: https://github.com/github/design-systems/issues/378
---

Marketing padding utilities extend [core margin utilities](/css/utilities/margin) across the x and y axis. The [marketing scale](/css/support/marketing-variables#extended-spacing-scale) starts from spacer 7 up to 12, and steps first by `8px` for spacer 7 and continues in increments of `16px` for spacer 8 to 12.

## Padding utilities

Use marketing padding utilities to apply padding to top, right, bottom, left, x-axis, or y axis of an element. These utilities can change or override default padding, and can be used with a spacing scale of 7-12.

```html
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pt-7">.pt-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pr-7">.pr-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pb-7">.pb-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pl-7">.pl-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue px-7">.px-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue py-7">.py-7</div>
</div>
```

## Responsive padding utilities

All marketing padding utilities can be adjusted per [breakpoint](/css/objects/grid#breakpoints) using the following formula: `p[y-direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html
<div class="d-inline-block margin-orange">
  <div class="py-sm-7 pb-lg-9 d-inline-block block-blue">
    .py-sm-7 .pb-lg-9
  </div>
</div>
```
