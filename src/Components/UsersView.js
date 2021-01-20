import React from 'react'
import UserCard from './UserCard';
const UsersView = ({ data = [],history, ...props }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {data.map((user,index) => {
                return <UserCard key={index} data={user} onClick={()=>history.push(`/users/${user.id}`)}/>
            })}
        </div>
    )
}
export default UsersView;
