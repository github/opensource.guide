# Load the required helper file for the tests
require_relative "./helper"
# Define the test suite named "lint test"
describe "lint test" do
  # Loop through each 'page' in the 'pages' collection
  
  pages.each do |page|
    # Skip the current page if its 'path' does not match the pattern /\.md$/
    next unless page["path"].match?(/\.md$/)

    describe page["path"] do
       # Create a nested test suite for the current page's 'path'
      describe "frontmatter" do
         # Before running each test, load the raw metadata from the page's 'path'
        before do
          # Load raw metadata to skip defaults
          @data = SafeYAML.load_file(page["path"])
        end
 # Define a test to check if the frontmatter has valid fields
        it "has valid fields" do
          # Call the 'assert_valid_fields' method to perform the validation
          assert_valid_fields @data, site.data["fields"]
        end
      end
    end
  end
# Define a helper method to assert the validity of fields in the data against a set of expected fields
  def assert_valid_fields(data, fields)
    extra_fields = data.keys - fields.keys
    assert extra_fields.empty?, "Unexpected metadata: #{extra_fields.inspect}"

    fields.each do |name, attrs|
      assert data.key?(name), "#{name} is required" if attrs["required"]

      if attrs["type"] && @data[name]
        assert_kind_of Kernel.const_get(attrs["type"]), @data[name]
      end

      # Check subfields
      next unless attrs["fields"] && @data[name]
      @data[name].each do |d|
        assert_valid_fields(d, attrs["fields"])
      end
    end
  end
end
