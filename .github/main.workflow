workflow "Test" {
  on = "push"
  resolves = ["Test Runner"]
}

action "Test Runner" {
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}
