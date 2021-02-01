const path = require('path')

// create gatsby pages dynamically

exports.createPages = async ({ actions, graphql }) => {
    const res = await graphql(`{
            items: allContentfulProduct {
                nodes {
                slug
                }
            }
        }`
    )
    const { createPage } = actions
    res.data.items.nodes.forEach( item => {
        createPage({
            path: `product/${item.slug}`,
            component: path.resolve(`src/pages/template/item.js`),
            context: {
                slug: item.slug
            }
        })
    })
}

