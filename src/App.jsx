import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard';




const baseURL = "http://users-crud1.herokuapp.com";


function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [users, setUsers] = useState();
  const [modalShow, setModalShow] = useState(false)


  useEffect(()=>{
    getAllUser()
  },[]);


  //Mostrar modale
  const changeModal = ()=>{
    if(modalShow) {
      setModalShow(false)
    }else{
      setModalShow(true)
    }
  }


  //Mostrar todos los usuario
  const getAllUser = ()=>{
   
    axios.get(`${baseURL}/users/`)
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))
     
  }

  //Crear usuarios
  const createUSer = (data)=>{
    axios.post(`${baseURL}/users/`,data)
      .then((res)=>getAllUser())
      .catch(err=>console.log(err));
  }


  //Funcion de eliminar usuarios
  const deleteUSer = (id)=>{
  
    axios.delete(`${baseURL}/users/${id}`)
      .then((res)=>getAllUser())
      .catch(err=>console.log(err.response.headers))
  }


  //Funcion para crear usuarios
  const updateUser = (data)=>{
    let id = data.id;
     axios.patch(`${baseURL}/users/${data.id}/`,data)
      .then(res=>{
        getAllUser()
        setInfoUpdate()
      })
      .catch(err=>console.log(err.response.data)) 
     
  }

  return (
    <div className="App">
     
      <div className="container">
      
          
       <button className='btn btn-primary' onClick={changeModal}>Crear nuevo usuario</button>
       
       <div className="card__container">
      {
       

        
        users?.map((user)=>(
          <UserCard 
            user={user} 
            key={user.id } 
            deleteUSer={deleteUSer}
            setInfoUpdate={setInfoUpdate}
            changeModal={changeModal}
          />
        ))
      }
      </div>
      </div> 
      <FormUser  
        createUSer={createUSer}
        updateUser={updateUser}
        infoUpdate={infoUpdate}
        modalShow={modalShow}
        changeModal={changeModal}
      />
    </div>
  )
}

export default App
