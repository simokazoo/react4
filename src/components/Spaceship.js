import React from 'react';

export default class Spaceship extends React.Component {
    render() {
      return (
        <div className="spaceship">
          <h2>Name: {this.props.name}</h2>
          <p>Speed: {this.props.speed}</p>
          <p>Rockets: {this.props.hasRockets}</p>
          <p>Color: {this.props.colors.join(', ')}</p>
        </div>
      );
    }
  }

  Spaceship.defaultProps = {
    speed:  'slow',
    hasRockets: (false) ,
    colors: ['black', 'red']
  };