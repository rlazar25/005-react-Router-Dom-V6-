import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function NavbarComponent() {

    const [navItems, setNavItems] = useState([
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Products',
            url: '/products'
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ])


    return (
        <div className="container mx-auto flex justify-between bg-slate-300 p-3">
            <h1>AlphaCode</h1>

            <ul className="flex gap-3">
                {navItems.map((nav, index) => {
                    return <li key={index}>
                        <NavLink to={nav.url}>{nav.title}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NavbarComponent