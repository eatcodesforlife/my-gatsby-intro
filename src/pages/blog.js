import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

const { text, title } = styles

const blog = () => {
    return (
        <Layout>
            <div className="blog-container">
                <h2 className={title}>this is a blog post</h2>
                <p className={text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa natus modi, sapiente quia similique nesciunt sint aliquid nobis dolorem magnam.</p>  
            </div>    
        </Layout>
    )
}

export default blog
