import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const notfound = () => {
    return (
        <Layout>
            <h2>page not found</h2>  
            <span>
                <Link to="/">Home</Link>
            </span>  
        </Layout>
    )
}

export default notfound

