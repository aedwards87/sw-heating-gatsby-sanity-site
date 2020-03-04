import React from 'react'

const Gallery = () => {
  const { allSanityGallery } = useStaticQuery(
    graphql`
      query GalleryQuery {
        allSanityGallery {
          edges {
            node {
              work {
                id
                title
                mainImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                secondImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                thirdImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                fourthImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                fifthImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                sixthImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                seventhImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                id
                title
                eighthImage {
                  asset {
                    fluid(maxWidth: 1000)  {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      
    </div>
  )
}

export default Gallery
