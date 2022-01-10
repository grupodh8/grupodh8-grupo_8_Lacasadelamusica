import "./userlist.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/////////////////////////////////////////////////////

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/users")
          .then((response) => response.json())
          .then((data) => setUsers(data.data));
      }, []);

    return (
        <>
        <table className="userList">
            <thead className="userListColumns userListColumnsMobile">
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, i) =>
                <tr className="tableRowMobile" key={i}>
                    <p className="rowTitleMobile">USUARIO {user.id}</p>
                    <td className="hideMobile">{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td className="listItemLast"><Link to={"/user/" + user.id}>
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