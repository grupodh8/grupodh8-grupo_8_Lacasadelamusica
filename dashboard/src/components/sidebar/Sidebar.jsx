import React from 'react'
import './sidebar.css'
import {
    LineStyle, PersonOutline, Storefront, Class } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle textoSidebar">General</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                <p className="textoSidebar">Inicio</p>
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon" />
                                <p className="textoSidebar">Usuarios</p>
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                <p className="textoSidebar">Productos</p>
                            </li>
                        </Link>
                        <Link to="/categories" className="link">
                            <li className="sidebarListItem">
                                <Class className="sidebarIcon" />
                                <p className="textoSidebar">Categorias</p>
                            </li>
                        </Link>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}