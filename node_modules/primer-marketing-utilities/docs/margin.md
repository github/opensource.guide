---
title: Marketing Margin
sort_title: Margin Marketing
path: utilities/marketing-margin
status: Stable
status_issue: https://github.com/github/design-systems/issues/378
---

Marketing margin utilities extend [core margin utilities](/css/support/spacing) across the y-axis only. The [marketing scale](/css/support/marketing-variables#extended-spacing-scale) starts from spacer 7 up to 12, and steps first by `8px` for spacer 7 and continues in increments of `16px` for spacer 8 to 12.


## Y-axis margin utilities

Use marketing margin utilities to apply margin to top, bottom, or both y-axis of an element. These utilities can change or override default margins, and can be used with a spacing scale of 7-12.

```html
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue mt-7">.mt-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue mb-7">.mb-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue my-7">.my-7</div>
</div>
```

## Responsive y-axis margin utilities

All marketing margin utilities can be adjusted per [breakpoint](/css/objects/grid#breakpoints) using the following formula: `m[y-direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html
<div class="d-inline-block margin-orange">
  <div class="my-sm-7 mb-lg-9 d-inline-block block-blue">
    .my-sm-7 .mb-lg-9
  </div>
</div>
```
