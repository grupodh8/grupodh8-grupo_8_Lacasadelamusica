import React from 'react'
import './topbar.css'
import { ArrowBack } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src="http://localhost:3001/images/logo.png" alt="" className="topbarLogo" />
                    <span className="logo">Panel de Administrador</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <a href="http://localhost:3001/">
                            <button className="topbarBackButton"><ArrowBack /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}