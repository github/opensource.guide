workflow "Test and build on push" {
  resolves = [
    "CI Test Runner",
    "Jekyll Pages Builder",
  ]
  on = "push"
}

action "CI Test Runner" {
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}

action "Jekyll Pages Builder" {
  uses = "./.github/pages_builder"
  secrets = ["GITHUB_TOKEN"]
}
