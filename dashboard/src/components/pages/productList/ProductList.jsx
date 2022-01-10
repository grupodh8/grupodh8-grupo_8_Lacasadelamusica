import "./productList.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const UserList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
          .then((response) => response.json())
          .then((data) => setProducts(data.data));
      }, []);

    return (
        <>
        <table className="userList">
            <thead className="userListColumns userListColumnsMobile">
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, i) =>
                <tr className="tableRowMobileProduct" key={i}>
                    <p className="rowTitleMobile">PRODUCTO {product.id}</p>
                    <td className="hideMobile">{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td style={ { width: '400px' }} className="descriptionProd">{product.description}</td>
                    <td className="listItemLast"><Link to={"/product/" + product.id}>
                            <button className="userListEdit">Detalle</button>
                        </Link></td>
                </tr>
            )}
            </tbody>
        </table>
    </>



    
    )

}

export default UserList;