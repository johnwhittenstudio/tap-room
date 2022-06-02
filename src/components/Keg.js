import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  const stockCheck = props.pints === 0 ? "Out of Stock" : props.pints;
  
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand}</h3>
        <h5>{props.name}</h5>
        <p>ABV: {props.abv}%</p>
        <p>IBU: ${props.ibu}</p>
        <p>Price: {props.price}</p>
        <p>Pints available: {stockCheck}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,  
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;