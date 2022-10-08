import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faTrash, faPen, faCakeCandles } from '@fortawesome/free-solid-svg-icons'


const UserCard = ({user, deleteUSer,setInfoUpdate,changeModal}) => {


    const btnDel =(id)=>{
        deleteUSer(id);
    }

    const btnInfo = (user)=>{
        setInfoUpdate(user);
        changeModal();
    }
  return (
    <div id='card' className='card bg-gray-middle'>
        <div className="card__header d-flex">
            <h2>{user.first_name} {user.last_name}</h2>
            <div className="card__items">
                <button onClick={()=>btnInfo(user)}>
                <FontAwesomeIcon icon={faPen} />
                </button>
                <button onClick={()=>btnDel(user.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
           
        </div>
        <div className="card__body">
            <p>
                <FontAwesomeIcon icon={faCakeCandles} />
                {user.birthday}
                </p>
            <span>
                <FontAwesomeIcon icon={faEnvelope} />    
                {user.email}</span>
        </div>
    </div>
  )
}

export default UserCard