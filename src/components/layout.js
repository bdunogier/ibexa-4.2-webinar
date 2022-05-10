import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '@mui/material/Container'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Container maxWidth={"lg"}>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <header className={siteTitle}><img width="200" src="https://www.ibexa.co/assets/images/ibexa_logo.svg" /></header>
            </Container>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <Container maxWidth={"lg"}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/" className={"nav-link"}>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className={"nav-link"}>About</Link></li>
                        <li className="nav-item"><Link to="/catalog" className={"nav-link"}>Catalog</Link></li>
                    </ul>
                </Container>
            </nav>
            <Container maxWidth={"lg"}>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            </Container>
        </Container>
    )
}
export default Layout
