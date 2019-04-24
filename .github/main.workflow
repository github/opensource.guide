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
  resolves = ["Jekyll Pages Builder"]
}

action "Jekyll Pages Builder" {
  uses = "./.github/pages_builder"
  secrets = ["GITHUB_TOKEN"]
}
