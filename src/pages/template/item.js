import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/Layout'
import Image from 'gatsby-image'

const ComponentName = ({ data: { item: { title, price, image:{fixed}, description: {description} }} }) => {
    return (
        <Layout>
            <div style={{textAlign: "center"}}>
                <Link to='/product'>Back to products</Link>
                <h1>{title}</h1>
            </div>
            <section className='single-item'>
                <article>
                    <Image fixed={fixed}  alt={title}/>
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{description}</p>
                    <button>Add to cart</button>
                </article>
            </section>
        </Layout>
    )
}


export const query = graphql`
    query getItem($slug: String) {
        item: contentfulProduct(slug: {eq: $slug}) {
            title
            price
            image {
                fixed(width: 300) {
                    ...GatsbyContentfulFixed
                }
            }
            description {
                description
        }
    }
}`

export default ComponentName
