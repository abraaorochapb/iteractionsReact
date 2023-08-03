import React from 'react'
import { useState } from 'react'

const RenderingKeys = () => {
const [users,setUsers] = useState([
  {id: 1, name: 'John', age: 20},
  {id: 2, name: 'Jane', age: 34},
  {id: 3, name: 'Jack', age: 18}
])
  
  return (
    <div>
      <ul>
        { 
          users.map((user) => 
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>)
        }
      </ul>
    </div>
  )
}

export default RenderingKeys