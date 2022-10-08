import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
};



const FormUser = ({ createUSer, updateUser, infoUpdate, modalShow, changeModal }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (infoUpdate) {
            reset(infoUpdate)
        }
    }, [infoUpdate]);



    const submit = (data) => {

        if (infoUpdate) {
            updateUser(data);
        } else {
            createUSer(data);
        }

        changeModal();
        reset(defaultValues);
    }

  

    return (
        <section id='FormUser' className={modalShow ? 'modal_container modal_show' : 'modal_container' } >
            <div className="modal card bg-gray-middle" >
                <div className="card__header">
                    <h1>{infoUpdate ? 'Actualizar Usuario' : 'Crear Usuario'}</h1>
                    <FontAwesomeIcon icon={faX} onClick={changeModal} style={{cursor:'pointer'}} />
                </div>
                <div className="card__body">
                    
                    <form action="" onSubmit={handleSubmit(submit)}>
                        <div className="form-group">
                            <label htmlFor="">Nombre:</label>
                            <input type="text" className="form-control" id='firstName' {...register('first_name')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Apellido:</label>
                            <input type="text" className="form-control" id='lastName' {...register('last_name')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Correo:</label>
                            <input type="text" className="form-control" id='email' {...register('email')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contraseña:</label>
                            <input type="password" className="form-control" id='password' {...register('password')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Cumpleaños:</label>
                            <input type="date" className="form-control" id='date' {...register('birthday')} />
                        </div>
                        <div className="form-group">
                        <button className='btn-primary'>{infoUpdate ? 'Actualizar' : 'Crear'}</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormUser