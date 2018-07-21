module.exports = {
  website: {
    assets: "./highlight",
    js: [
      "highlight.pack.less.js"
    ],
    css: [
      "default.css",
      "xcode.css"
    ]
  },
  book: {
  },
  hooks: {
    "page:before": function(page) {
      
      return page;
    }
    "page": function(page) {
        page.content += '<script>hljs.initHighlightingOnLoad();</script>';
        return page;
    }
  }
};
