import TopNav from '../navs/top-nav.js'
import SideNav from '../navs/side-nav.js'

export default function Layout({ children, ...pageProps }) {
    return <>
        <TopNav></TopNav>
        {/* <SideNav brands={pageProps.brands}></SideNav> */}
        {children}
    </>
}