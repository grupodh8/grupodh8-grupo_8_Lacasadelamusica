import "./featuredinfo.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function FeaturedInfo() {

    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    let urlUsers = 'http://localhost:3000/api/users/'
    let urlProducts = 'http://localhost:3000/api/products/'

    useEffect(() => {
        fetch(urlUsers)
            .then((response) => response.json())
            .then((data) => setUsers(data.data));
    }, []);

    useEffect(() => {
        fetch(urlProducts)
            .then((response) => response.json())
            .then((data) => setProducts(data.data));
    }, []);

    useEffect(() => {
        fetch(urlProducts)
            .then((response) => response.json())
            .then((data) => setCategories(data.countByCategory));
    }, []);



    return (
        <div className="featuredItems">
            <Link to="/products" className ="featuredItem">
                <span className="featuredTitle">
                    Total de productos
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{products.length}</span>
                </div>
            </Link>
            <Link to="/users" className="featuredItem">
                <span className="featuredTitle">
                    Total de usuarios
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{users.length}</span>
                </div>
            </Link>
            <Link to="/categories" className="featuredItem">
                <span className="featuredTitle">
                    Total de categorias
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{Object.keys(categories).length}</span>
                </div>
            </Link>
        </div>
    )
}