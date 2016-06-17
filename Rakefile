namespace :assets do
  task :precompile do
    sh "bundle exec jekyll-auth build"
  end
end

require "rake/testtask"
Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList["test/*_test.rb"]
  t.warning = false
  t.verbose = false
end

task :default => :test
