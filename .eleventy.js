const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};
