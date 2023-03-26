# Import the necessary libraries.
require "minitest/autorun"
require "jekyll"

# Define a module to store site-related variables and methods.
module Helper
  class << self
    # Allow access to configuration and site variables from outside the module.
    attr_accessor :config, :site
  end
end

# Returns the path to the directory containing the source files.
def source
  File.expand_path("../", File.dirname(__FILE__))
end

# Returns the configuration for the Jekyll site, loading it if not yet defined.
def config
  # Use the existing configuration if it already exists.
  Helper.config ||= Jekyll.configuration("source" => source)
end

# Returns an array containing all the pages in the Jekyll site.
def pages
  # Get all the documents in the "articles" collection and add them to the list of pages.
  (site.pages + site.collections["articles"].docs).map(&:to_liquid)
end

# Returns the Jekyll site object, creating it if not yet defined.
def site
  # Use the existing site object if it already exists.
  Helper.site ||= begin
    site = Jekyll::Site.new(config)
    # Reset the site to its initial state, including clearing the cache.
    site.reset
    # Read in all the site data from the source files.
    site.read
    site
  end
end
