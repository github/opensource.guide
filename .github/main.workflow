workflow "CI Test Runner" {
  resolves = ["test"]
  on = "push"
}

action "test" {
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}
