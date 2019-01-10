import React, { Component } from 'react';

const onionListener = event => {
    const guilty = event.target.value;
    if (guilty.includes('cebolla')){ 
    alert("ODIO LA CEBOLLA");
    }
};

class OnionHater extends Component {
  render() {
    return (
      <div className="OnionHater">
       <textarea rows="8" cols="60" onChange={onionListener}>

       </textarea>
      </div>
    );
  }
}

export default OnionHater;