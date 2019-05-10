FROM jekyll/jekyll

LABEL "com.github.actions.name"="CI Test Runner"
LABEL "com.github.actions.description"="Run the full test suite"
LABEL "com.github.actions.icon"="gear"
LABEL "com.github.actions.color"="purple"

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
