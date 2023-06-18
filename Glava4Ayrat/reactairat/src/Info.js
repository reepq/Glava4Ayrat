import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <div>
        <h2>Имя: Айрат{this.props.name} Возраст: 19 {this.props.age} Город: Димитровград {this.props.city}</h2>
    
      </div>
    );
  }
}

export default Info;