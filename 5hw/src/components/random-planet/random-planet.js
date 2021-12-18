import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';


const Spinner = () => {
  return <h1>Loading...</h1>
}


export default class RandomPlanet extends Component {
  state = {
    item: {},
    load: false
  }

  swapi = new SwapiService();

  componentDidMount = () => {
    this.updateData(2)

    this.inteval = setInterval(() => {
      const id = Math.floor(Math.random() * (20 - 1) + 1);
      this.updateData(id)
    }, 2000)
  }

  componentWillUnmount = () => {
    clearInterval(this.inteval)
  }

  updateData = (id) => {
    this.swapi.getPlanet(id).then((data) => {
      this.setState({
        item: data,
        load: true
      })
    })
  }

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.state.item;
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    if (!this.state.load) {
      return <Spinner />
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src={imageUrl} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
