import React from 'react'
import Estados from './Estados'

export default class Dados extends React.Component {
  render() {
    return(
      <fieldset>
        <label htmlFor="name">
          Nome:
          <input className="input-uppercase" type="text" name="name" id="name" maxlength="40" required/>
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" maxlength="50" required/>
        </label>
        <label htmlFor="cpf">
          CPF:
          <input type="text" name="cpf" id="cpf" maxlength="11" required/>
        </label>
        <label htmlFor="address">
          Endereço:
          <input type="text" name="address" id="address" maxlength="200" required/>
        </label>
        <label htmlFor="city">
          Cidade:
          <input type="text" name="city" id="city" maxlength="28" required/>
        </label>
        <Estados />
        <label htmlFor="house">
          Casa
          <input type="radio" name="type" id="house" />
        </label>
        <label htmlFor="apartment">
          Apartamento
          <input type="radio" name="type" id="apartment" />
        </label>
      </fieldset>
    )
  }
}