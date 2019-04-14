module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: "gatsby-remark-normalize-paths"
      },
      /* {
        resolve: `gatsby-remark-relative-images`
      }, */
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
          linkImagesToOriginal: true,
          quality: 100,
          withWebp: true
        }
      },
      {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank"
        }
      }
    ]
  }
}
