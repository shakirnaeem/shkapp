import TopNav from '../navs/top-nav.js'
import SideNav from '../navs/side-nav.js'
import { useState } from 'react'

export default function Layout({ children, ...pageProps }) {
    const [toggleSideNav, setToggleSideNav] = useState(false)
    return <>
        <TopNav toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav}></TopNav>
        <SideNav toggleSideNav={toggleSideNav} setToggleSideNav={setToggleSideNav} brands={pageProps.brands}></SideNav>
        {children}
    </>
}