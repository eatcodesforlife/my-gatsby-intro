import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/examples'>Examples</Link>
                </li>
                <li>
                    <Link to='/images'>Images</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar
