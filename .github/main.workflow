workflow "Test and build on push" {
  resolves = ["Jekyll Pages Builder"]
  on = "push"
}

action "CI Test Runner" {
  needs = "checkout pull request"
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}

action "Jekyll Pages Builder" {
  needs = "CI Test Runner"
  uses = "./.github/pages_builder"
  secrets = ["GITHUB_TOKEN"]
}

action "checkout pull request" {
  uses = "gr2m/git-checkout-pull-request-action@master"
}
