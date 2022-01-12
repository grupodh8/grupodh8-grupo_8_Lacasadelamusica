import './category.css'
import React, { useState, useEffect } from 'react';

export default function Category() {
    const [categories, setCategories] = useState([]);
    let url = 'http://localhost:3000/api/products/'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCategories(data.countByCategory));
    }, []);

    let categoryEntries = Object.entries(categories)
    console.log(categoryEntries)

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="UserTitle">Detalle de categorias</h1>
            </div>
            <div className="userContainer">
                            <div className="featuredCat">
                                {categoryEntries.map(([key, value]) =>  
                                        <div className="featuredCategoryItem">
                                            <span className="featuredTitle">
                                                {key}
                                            </span>
                                            <div className="featuredCategoryContainer">
                                                <span className="featuredCategory">{value}</span>
                                            </div>
                                        </div>
                                )}
                            </div> 
            </div>
        </div >
    )
}