import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Login.css';

function initialState(){
 return {email: '' , password: ''};
}

function login(user){
  if(user.email === 'admin' && user.password === 'admin'){
    return {token :  '1234'};
  }

  return {Error: 'Usuário ou senha inválido'};
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

  function onSubmit(event){
     event.preventDefault();
     const {token} = login(values);
     console.log(token);
     if(token){
          setToken(token);
          history.push('/');
     }

     setValues(initialState);
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