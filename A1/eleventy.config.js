module.exports = function(eleventyConfig) {
    // Ensure Eleventy copies the public folder for CSS and other static assets
    eleventyConfig.addPassthroughCopy("public");
  
    // Add collection for projects
    eleventyConfig.addCollection("projects", function(collectionApi) {
      return collectionApi.getFilteredByGlob("./projects/*.md");
    });
  
    return {
      dir: {
        input: ".",        
        includes: "_includes",// Nunjucks templates
        data: "_data",        // Data files (Don't have any - clarify if this is required)
        output: "_site"       // Output directory
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
    };
  };
  