workflow "test" {
  resolves = ["CI Test Runner"]
  on = "push"
}

action "CI Test Runner" {
  uses = "./.github/test_runner"
  secrets = ["GITHUB_TOKEN"]
}

workflow "build" {
  on = "push"
  resolves = ["CI Test Runner-1"]
}

action "CI Test Runner-1" {
  uses = "./.github/test_runner"
}
