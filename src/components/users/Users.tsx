import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState<string[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.map((user: { name: string }) => user.name)))
    }, [])

  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users