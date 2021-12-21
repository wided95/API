import React from 'react'

const Person = ({user}) => {
    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7uaIBDsEnqc-9Kfo-6PCr57tOEL1VvuNjg&usqp=CAU" alt="" />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <ul>
                <li>{user.address.street}</li>
                <li>{user.address.suite}</li>
                <li>{user.address.zipcode}</li>
            </ul>
        </div>
    )
}

export default Person
