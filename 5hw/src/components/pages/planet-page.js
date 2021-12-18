import React from 'react'
import {PlanetList, PlanetDetails} from '../sw-components';
import Row from '../row';

class PlanetPage extends React.Component {
  state = {
    selectedItem: 4
  }

  onSelectItem = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const left = <PlanetList onSelectItem={this.onSelectItem} />
    const right = <PlanetDetails selectedItem={this.state.selectedItem} />

    return (
      <Row
        leftElement={left}
        rightElement={right}
      />
    )
  }
}

export default PlanetPage;
