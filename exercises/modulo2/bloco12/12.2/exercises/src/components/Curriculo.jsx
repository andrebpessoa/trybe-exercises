import React from 'react'

export default class Curriculo extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="resume">
          Resumo do currículo:
          <textarea name="resume" id="resume" maxlength="1000" required></textarea>
        </label>
        <label htmlFor="cargo">
          Cargo:
          <textarea name="cargo" id="cargo" maxlength="40" required></textarea>
        </label>
        <label htmlFor="description">
          Descrição do cargo:
          <input type="text" name="description" id="description" maxlength="500" required/>
        </label>
      </fieldset>
    )
  }
}