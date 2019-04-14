module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-relative-images`,
      },
      //`gatsby-remark-normalize-paths`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
          linkImagesToOriginal: true,
          quality: 100,
          withWebp: true,
        },
      },
      /* {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      }, */
      {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank",
        },
      },
      //"gatsby-remark-copy-linked-files",
    ],
  },
}
