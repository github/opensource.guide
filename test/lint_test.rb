require_relative "./helper"

describe "lint test" do
  content.each do |page|
    describe page["path"] do
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
