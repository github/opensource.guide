FROM jekyll/jekyll

LABEL "com.github.actions.name"="Test Runner"
LABEL "com.github.actions.description"="Write arguments to the standard output"
LABEL "com.github.actions.icon"="gear"
LABEL "com.github.actions.color"="purple"

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV BUNDLER_VERSION 1.17.3

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
