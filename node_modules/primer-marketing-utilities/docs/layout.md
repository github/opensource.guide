---
title: Marketing Layout
sort_title: Layout Marketing
path: utilities/marketing-layout
status: Stable
---

Marketing layout utilities build on top of [primer-core utilities](/css/utilities/layout#position), adding the option of responsive positioning.

{:toc}

## Position elements with spacing utilities

Position elements from all four element edges (`top`, `right`, `bottom`, and `left`) using any spacing utility from the global spacing scale and the marketing spacing scale (from `$spacer-1` to `$spacer-12`), including negative and 0 values.

Use these with `.position-absolute` to position decorative assets and shapes on marketing sites.

In an effort to reduce the size of our CSS, responsive breakpoints are only supported for `md` and `lg` breakpoints. **There is no support for `sm` and `xl` breakpoints.**

```html
<div class="position-relative p-6 bg-gray">
  <div class="border bg-white position-absolute top-2">.top-2</div>
  <div class="border bg-white position-absolute position-lg-static right-md-4">.right-md-4</div>
  <div class="border bg-white position-lg-absolute left-lg-1">.left-lg-1</div>
</div>
```
