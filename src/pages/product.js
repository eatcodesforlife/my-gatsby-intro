import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import styles from '../components/products.module.css'
import Image from 'gatsby-image'



const Product = ({data}) => {

    const { allContentfulProduct:{ nodes: items }} = data

    return (
        <Layout>
            <section className={styles.page}>
              {
                  items.map(({image, title, price, slug, id}) => (
                      <article key={id} className={styles.item}>
                          <Image fluid={image.fluid} alt={title}/>
                          <h3>{title} <span>${price}</span></h3>
                          <Link to={`/product/${slug}`}>More details</Link>
                      </article>
                  ))
              }
            </section>
        </Layout>
    )
}


export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
export default Product
