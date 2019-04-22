#!/bin/sh -l

script/bootstrap
cd test && npm install && cd ..
JEKYLL_GITHUB_TOKEN=$GITHUB_TOKEN script/build
