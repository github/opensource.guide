require_relative "./helper"

describe "lint test" do

  content.each do |page|

    describe page["path"] do

      describe "frontmatter" do

        before do
          # Load raw metadata to skip defaults
          @data = SafeYAML.load_file(page["path"])
        end

        it "contains supported fields" do
          extra_fields = @data.keys - site.data["fields"].keys
          assert extra_fields.empty?, "Unexpected metadata in #{page["path"]}: #{extra_fields.inspect}"
        end

        site.data["fields"].each do |name, attrs|
          it "#{name} is required" do
            assert @data.key?(name), "#{name} is required"
          end if attrs["required"]

          it "#{name} should be of type #{attrs["type"]}" do
            assert_kind_of Kernel.const_get(attrs["type"]), @data[name] if @data[name]
          end if attrs["type"]

          it "#{name} has valid attributes" do
          end
        end
      end
    end
  end
end
