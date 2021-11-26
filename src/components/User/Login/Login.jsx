import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import Swal from 'sweetalert2'

import './Login.css';
import api from 'utils/api';

function initialState(){
 return {email: '' , password: ''};
}

const UserLogin = () => {
  
  const [values, setValues] =  useState(initialState);
  const {setToken} = useContext(StoreContext);
  const history = useHistory();

  function onChange(event){
    const {value, name} = event.target;

    setValues({
      ...values,
      [name] : value,
    });

  }

   function formatMessage(response)
   {
     console.log(response.error.length);
     if(typeof response === 'object'){
      let message = "";
      for(let i = 0; i <= response.error.length; i++){
         message += response.error[i] ? response.error[i] : "";
       }
       return message;
     }

     return response;
   }

   function onSubmit(event){
     event.preventDefault();
     Swal.fire({
      title: 'Processando ...',
      timerProgressBar: true,
      onBeforeOpen: () => {
          Swal.showLoading()
      }
    });

     try {
      api.post('http://localhost:4000/login', values)
         .then((response) => {
          setToken(response.data.token);
          history.push('/');
          Swal.close()
        })
        .catch((error) => {
          if (error.response){
            Swal.fire({
              icon: 'error',
              title: formatMessage(error.response.data)
          })
          
        }
          setValues(initialState);
        }); /*
        setToken('aaaaaaaaaaaaaaa');
        history.push('/');
        Swal.close()*/
     } catch (err) {
         alert(err);
     }
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" onChange={onChange} value={values.email} autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password"  onChange={onChange}  value={values.password} />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
