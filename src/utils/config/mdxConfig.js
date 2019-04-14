module.exports = {
  resolve: `gatsby-mdx`,
  options: {
    extensions: [".mdx", ".md"],
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-relative-images`,
      },
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 1035,
          sizeByPixelDensity: true
        },
      },
      {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank",
        },
      },
      /*{
        resolve: "gatsby-remark-copy-linked-files",
      },
       {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
      {
        resolve: `gatsby-remark-normalize-paths`
      }, */
    ],
  },
}
