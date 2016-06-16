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

          it "#{name} should be an Array" do
            assert_kind_of Array, @data[name],
              "#{name} should be an Array" if @data[name]
          end if attrs["type"] == "Array"

          it "#{name} has valid attributes" do
          end
        end

        it "related articles should exist" do
          @data["related"].each do |path|
            assert File.exist?("_content/#{path}"), "#{path} does not exist"
          end if @data["related"]
        end

        it "has valid credits" do
          Array(page["credits"]).each do |credit|
            keys = ["attribution", "license", "title", "url"].sort
            assert_equal credit.keys.sort, keys,
              "Malformed credits in #{page["path"]}"

            assert site.data["licenses"].include?(credit["license"]),
              "Unapproved license in #{page["path"]} for #{credit["url"]}: #{credit["license"]}"
          end
        end
      end
    end
  end
end
