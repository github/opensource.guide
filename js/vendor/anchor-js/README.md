# AnchorJS [![Build Status](https://img.shields.io/travis/bryanbraun/anchorjs/master.svg?style=flat)](https://travis-ci.org/bryanbraun/anchorjs)

A JavaScript utility for adding deep anchor links ([like these](http://ux.stackexchange.com/q/36304/33248)) to existing page content. AnchorJS is lightweight, accessible, and has no dependencies.

**[See Live Examples in the Documentation](http://bryanbraun.github.io/anchorjs#examples).**

![Anchoring links](http://bryanbraun.com/sites/default/files/anchoring-links_0.png)

## Installation

Download AnchorJS using npm,

```bash
npm install anchor-js
```

or bower:

```bash
bower install anchor-js --save-dev
```

(or just [download it from github](https://github.com/bryanbraun/anchorjs/releases)).

Then include the anchor.js file (or anchor.min.js) in your webpage.

```html
<script src="anchor.js"></script>
```

You could also include it via a CDN like [CDNJS](https://cdnjs.com/libraries/anchor-js) or [jsDelivr](http://www.jsdelivr.com/projects/anchorjs).

##Usage
See **[the Documentation](http://bryanbraun.github.io/anchorjs#basic-usage)** for detailed instructions.

## Compatibility
Currently Supports: IE9+ and modern browsers

## Contributing [![devDependency Status](https://img.shields.io/david/dev/bryanbraun/anchorjs.svg?style=flat)](https://david-dm.org/bryanbraun/anchorjs#info=devDependencies)
To contribute:

1. Fork/Clone the repo.
2. Make your changes.
3. Write tests as needed.
4. Run tests locally to confirm everything is working:
   - Install phantomjs: `brew install phantomjs`
   - Install test modules: Run `npm install`
   - Run all tests: `npm test`
5. Minify the code: `npm run release`
6. Submit a Pull Request.

## License
Licensed with the [MIT License](http://opensource.org/licenses/MIT).
