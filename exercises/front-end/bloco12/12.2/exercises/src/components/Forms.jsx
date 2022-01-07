import React from 'react'
import Curriculo from './Curriculo'
import Dados from './Dados'

export default class Form extends React.Component {
  render() {
    return(
      <section>
        <h1>Formulário em React</h1>
        <form>
          <Dados />
          <Curriculo />
        </form>
      </section>
    );
  }
}
