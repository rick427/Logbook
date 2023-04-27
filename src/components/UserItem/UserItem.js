import React from 'react';

import "./UserItem.css";

const UserItem = ({user, index}) => {
    return (
        <div className="users-item">
            <h4 className="users-item-title">
                {user.name}
            </h4>
            <p className="users-item-text">
                {user.phone}
            </p>
            <p className="users-item-text">
                {user.email}
            </p>
            <a className="users-item-link" href="https://www.google.com" target="_blank" rel="noreferrer">
                {user.website}
            </a>

            <span className="users-item-idx">{index}</span>
        </div>
    )
}

export default UserItem;
