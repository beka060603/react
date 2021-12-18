import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-details.css';


const Record = ({labelName, fieldName, data}) => {
  return (
    <li className="list-group-item">
      <span className="term">{labelName}</span>
      <span>{data[fieldName]}</span>
    </li>
  )
}


class ItemDetails extends Component {
  state = {
    item: {},
    itemImg: ''
  }

  swapi = new SwapiService()

  componentDidMount = () => {
    const id = this.props.selectedItem;

    this.props.getData(id).then((data) => {
      this.setState({
        item: data
      })
    })
  }

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.selectedItem !== this.props.selectedItem) {
      const id = this.props.selectedItem;

      this.props.getData(id).then((data) => {
        this.setState({
          item: data
        })
      })
    }
  }

  render() {

    const {id, name} = this.state.item;
    const imageUrl = this.props.getImage(id)

    return (
      <div className="person-details card">
        <img className="person-image" src={imageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(
                  child,
                  {data: this.state.item}
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export {ItemDetails, Record}
