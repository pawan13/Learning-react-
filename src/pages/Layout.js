import { Outlet, Link } from "react-router-dom"

const Layout = ()=>{
    return(
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}


// the layout components has <Outlet> and <Link> elements
// the <Outlet/> renders the current route selected 
//  <Link> is used to set the URL and keep the track of browsing history
// Anytime we link to an internal path, we will use <Link/> instead of <a href=""/>
//  The layout route is a shared component that inserts common content on all pages, such as navigation menu.
export default Layout