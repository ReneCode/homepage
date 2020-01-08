const path = require("path")

// https://codesandbox.io/s/gatsby-personal-starter-blog-1td37?from-embed

module.exports = {
  siteMetadata: {
    title: `@relang`,
    description: `hope it helps`,
    author: `@relang`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/developer.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        // commonmark: true,
        // // Footnotes mode (default: true)
        // footnotes: true,
        // // Pedantic mode (default: true)
        // pedantic: true,
        // // GitHub Flavored Markdown mode (default: true)
        // gfm: true,
        // // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            // options: {
            //   colorTheme: "Dark+ (default dark)", // Read on for list of included themes. Also accepts object and function forms.
            //   wrapperClassName: "", // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
            //   injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
            //   extensions: [], // Extensions to download from the marketplace to provide more languages and themes
            //   // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
            //   extensionDataDirectory: path.resolve("extensions"),
            //   languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
            //   replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
            //   getLineClassName: ({
            //     // Function allowing dynamic setting of additional class names on individual lines
            //     content, //   - the string content of the line
            //     index, //   - the zero-based index of the line within the code fence
            //     language, //   - the language specified for the code fence
            //     codeFenceOptions, //   - any options set on the code fence alongside the language (more on this later)
            //   }) => "",
            //   logLevel: "error", // Set to 'warn' to debug if something looks wrong
            // },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
