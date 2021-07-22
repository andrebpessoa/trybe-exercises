import React from 'react'

class Pokedex extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props;
    return (
      <section className="section-pokemons">
        <div className="div-pokemons">
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt="Pokemon" className="pokemons-img" />
      </section>
    )
  }
}

export default Pokedex;