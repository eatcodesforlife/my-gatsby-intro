import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => <div>
        <h4>
            {`person: ${data.site.info.person.name}`}        
        </h4>
        <h4>{`age: ${data.site.info.person.age}`}</h4>
    </div>
    }
  ></StaticQuery>
)

export default ComponentName
