---
title: Marketing Borders
sort_title: Borders Marketing
path: utilities/marketing-borders
status: Stable
---

The following border utilities are meant to used in addition to those within primer-core.

{:toc}

## Border Colors

### White border with alpha transparency

Use `.border-white-fade` to add a white border with an alpha transparency of 0.15. This is useful when you want a border that is a lighter shade of the background color. Additional border colors are available in [primer-core border utilities](/css/utilities/borders#border-colors).

```html
<div class="bg-gray-dark text-white p-3 mb-2">
  <span class="border border-white-fade p-2">
    .border-white-fade .bg-gray-dark
  </span>
</div>
<div class="bg-blue text-white p-3">
  <span class="border border-white-fade p-2">
    .border-white-fade .bg-blue
  </span>
</div>
```
