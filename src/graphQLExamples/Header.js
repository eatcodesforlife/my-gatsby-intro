import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
   query FirstQuery {
      site {
        info: siteMetadata {
          author
          data
          description
          title
          person {
            age
            name
          }
        }
      }
    }
  `
// "info" is alias for siteMetadata
const ComponentName = () => {
  const { site: { 
      info: { title, description, author }}} = useStaticQuery(getData)
  return (
      <div>
          <h2>
              {title}
          </h2>
          <h2>
              {description}
          </h2>
          <h2>
              {author}
          </h2>
      </div>
  )
}

export default ComponentName
