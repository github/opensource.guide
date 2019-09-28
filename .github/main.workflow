workflow "Test and build on push" {
  resolves = ["Jekyll Pages Builder"]
  on = "pull_request"
}

action "CI Test Runner" {
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}

action "Jekyll Pages Builder" {
  needs = "CI Test Runner"
  uses = "./.github/pages_builder"
  secrets = ["GITHUB_TOKEN"]
}
