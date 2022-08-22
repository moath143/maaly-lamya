import React from 'react'
import { useSelector } from 'react-redux'

const Usercomp = () => {
    const { num, x, z, loading, users } = useSelector((x) => x.userStore);
    const dataList = users.map((user) => {
        return (
            <div key={user.id}>
                <h1> {user.name} </h1>
            </div>
        )
    })
  return <div>{dataList}</div>;
}

export default Usercomp
