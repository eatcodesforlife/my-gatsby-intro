import React from 'react'
import Image from 'gatsby-image'
import img from '../images/bg1.jpg'
import { graphql, useStaticQuery } from 'gatsby'

const getImage = graphql`{
  fixed: file(relativePath: { eq: "bg2.jpg"}){
    childImageSharp {
      fixed( width:300, height: 400 ){
        ...GatsbyImageSharpFixed
      }
    }
  },
  fluid: file ( relativePath: { eq: "bg3.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
` 

const Images = () => {

    const data = useStaticQuery(getImage)
    console.log(data)
    return (
        <section className='images'>
            <article className='single-image'>
                <h2>Basic image</h2>
                <img src={img} width="100%" alt='bg-images'/>
            </article>
            <article className='single-image'>
                <h2>Fixed/blur image</h2>
                <Image fixed={data.fixed.childImageSharp.fixed} alt='bg-images'/>
            </article>
            <article className='single-image'>
                <h2>Fluid/svg image</h2>
                <Image fluid={data.fluid.childImageSharp.fluid} alt='bg-images'/>
            </article>
        </section>
    )
}

export default Images  