import React, { useContext } from 'react'

import {nameContext} from '../App'
const ComponentThree = () => {
    const users = useContext(nameContext);
  return (
    <div>
        {users.map((user) => <div className='box' key={user.id}>
          <div className='content'>
            <p><span>Names:</span> {user.name}</p>
            <p><span>Level of Education :</span> {user.education}</p>
            <p><span>Telephone Number :</span> {user.tell}</p>
            <p><span>PlaceofBirth :</span> {user.placeofbirth}</p>
            <hr />
          </div>
        </div>
      )}
    </div>
  )
}

export default ComponentThree