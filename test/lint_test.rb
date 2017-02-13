require_relative "./helper"

describe "lint test" do

  pages.each do |page|
    next unless page["path"].match(/\.md$/)

    describe page["path"] do

      describe "frontmatter" do

        before do
          # Load raw metadata to skip defaults
          @data = SafeYAML.load_file(page["path"])
        end

        it "has valid fields" do
          assert_valid_fields @data, site.data["fields"]
        end
      end
    end
  end

  def assert_valid_fields(data, fields)
    extra_fields = data.keys - fields.keys
    assert extra_fields.empty?, "Unexpected metadata: #{extra_fields.inspect}"

    fields.each do |name, attrs|
      if attrs["required"]
        assert data.key?(name), "#{name} is required"
      end

      if attrs["type"] && @data[name]
        assert_kind_of Kernel.const_get(attrs["type"]), @data[name]
      end

      # Check subfields
      if attrs["fields"] && @data[name]
        @data[name].each do |d|
          assert_valid_fields(d, attrs["fields"])
        end
      end
    end
  end
end
