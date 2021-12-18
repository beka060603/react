import React, { Component } from 'react';
import './item-list.css';


class ItemList extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    this.props.getData().then((data) => {
      this.setState({
        data: data
      })
    })
  }

  render() {
    const content = this.state.data.map(item => {
      return (
        <li key={item.id} onClick={() => this.props.onSelectItem(item.id)} className="list-group-item">
          {
            this.props.children(item)
          }
        </li>
      )
    })

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}

export default ItemList
