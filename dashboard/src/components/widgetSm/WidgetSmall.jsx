import "./widgetsmall.css"
import { Visibility, PersonOutline, Storefront } from "@material-ui/icons"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function WidgetSmall() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    let urlProducts = 'http://localhost:3000/api/products/'
    let urlUsers = 'http://localhost:3000/api/users/'

    useEffect(() => {
        fetch(urlProducts)
            .then((response) => response.json())
            .then((data) => setProducts(data.data.pop()));
    }, []);

    useEffect(() => {
        fetch(urlUsers)
            .then((response) => response.json())
            .then((data) => setUsers(data.data.pop()));
    }, []);


    return (
        <div className="containerAll">
            <div className="widgetSm">
                <span className="widgetSmTitle"><Storefront /> Ultimo producto creado</span>
                <div className="widgetContent">
                    <div className="widgetSmLeft">
                        <img className="lastProductCreated" src={products.image} alt="" />
                    </div>
                    <div className="widgetSmRight">
                        <span className="widgetSmName">{products.name}</span>
                        <span className="widgetSmCategory">{products.category}</span>
                        <Link to={"/product/" + products.id} className="productDetailButton">
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Detalle
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="widgetSm">
                <span className="widgetSmTitle"><PersonOutline /> Ultimo usuario registrado</span>
                <div className="widgetContent">
                    <div className="widgetSmLeft">
                        <img className="lastProductCreated" src={users.avatar} alt="" />
                    </div>
                    <div className="widgetSmRight">
                        <span className="widgetSmName">{users.first_name} {users.last_name}</span>
                        <span className="widgetSmCategory">{users.email}</span>
                        <Link to={"/user/" + users.id} className="productDetailButton">
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Detalle
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}