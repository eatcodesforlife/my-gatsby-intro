import React from "react"
import Layout from '../components/Layout'
import styles from '../components/index.module.css'
import { StyledButton } from '../components/button'

// style modules are objects so it can be destructured:
const { title, text } = styles

const Home = () => {
   return (
    <Layout>
      <h2 className={title}>hello from homepage</h2>
      <p className={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptas!</p>
      <button>
        <StyledButton>
         Click Me
        </StyledButton>
      </button>
    </Layout>
   )
}

export default Home