import React from 'react'
import Layout from '../components/Layout'
import Header from '../graphQLExamples/Header'
import HeaderStatic from '../graphQLExamples/HeaderStatic'
import { graphql } from 'gatsby'


const examples = ({data:{site:{siteMetadata: {description}}}}) => {
    return (
        <Layout>
            <div>
                <h2>Rendered q/ graphQL Examples page</h2>
                <Header />
                <HeaderStatic />
                <p>{description}</p>
            </div>
        </Layout>
    )
}

export const data = graphql`
  {
    site {
      siteMetadata {
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

export default examples
