module.exports = {
  website: {
    assets: "./highlight",
    js: [
		"highlight.pack.less.js",
		"start.js"
    ],
    css: [
      "default.css",
      "xcode.css"
    ]
  },
  book: {
  },
  hooks: {
    "page": function(page) {
        return page;
    }
  }
};
