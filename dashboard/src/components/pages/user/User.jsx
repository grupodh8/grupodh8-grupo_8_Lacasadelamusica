import './user.css'
import { PermIdentity, MailOutline, LocationSearching } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function User() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    let url = 'http://localhost:3000/api/users/' + id

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setUsers(data.data));
      }, []);

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="UserTitle">Detalle de usuario</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={users.avatar} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{users.first_name} {users.last_name}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles de cuenta</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{users.first_name} {users.last_name}</span>
                        </div>
                        <span className="userShowTitle">Detalles de contacto:</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{users.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">{users.address}, {users.city}, {users.zip}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}