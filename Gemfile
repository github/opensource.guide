source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'jekyll-seo-tag'

group :test do
  gem 'rake'
  gem 'html-proofer'
end
