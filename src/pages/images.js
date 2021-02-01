import React from 'react'
import Layout from '../components/Layout'
import Images from '../graphQLExamples/Images'


const images = () => {
    return (
        <Layout>
            <h2>Images from GraphQL</h2>
            <Images />
        </Layout>
    )
}

export default images
