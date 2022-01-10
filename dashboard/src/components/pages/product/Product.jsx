import './product.css'
import { LabelImportant } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Product() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    let url = 'http://localhost:3000/api/products/' + id

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data.data));
      }, []);

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="UserTitle">Detalle de producto</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={products.image} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{products.name}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles de producto</span>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Nombre: {products.name}</span>
                        </div>
                       <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">ID: {products.id}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">SKU: {products.sku}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Stock: {products.stock}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Descripcion: {products.description}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Clasificacion: {products.classification}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Categoria: {products.category}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Tipo: {products.type}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Precio: {products.price}</span>
                        </div>
                        <div className="userShowInfo">
                            <LabelImportant className="userShowIcon" />
                            <span className="userShowInfoTitle">Marca: {products.brand}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}