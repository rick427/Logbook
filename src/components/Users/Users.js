import React from 'react';

import "./Users.css";
import Loader from '../Loader/Loader';
import UserItem from '../UserItem/UserItem';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [backup, setBackup] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");

    React.useEffect(() => {
        fetchUsers();
    }, []);

    React.useEffect(() => {
        if(searchText.length > 0){
            const res = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
            setUsers(res);
        }
        else {
            setUsers(backup);
        }

        //eslint-disable-next-line
    }, [searchText]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "GET",
                headers: {},
            });
            const data = await res.json();
            setUsers(data);
            setBackup(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
    }

    return (
        <div>
            {loading && <Loader/>}

            {users && (
                <React.Fragment>
                    <input 
                        value={searchText} 
                        className="users-search" 
                        onChange={handleSearch} 
                        placeholder='Search users by name ...' 
                    />

                    <div className="users-list">
                        {users.map((item, idx) => (
                            <UserItem key={item.id} user={item} index={idx + 1} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default Users;