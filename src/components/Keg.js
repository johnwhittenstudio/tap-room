import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  const stockCheck = props.pints === 0 ? "Out of Stock" : props.pints;
  
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand}</h3>
        <h5>{props.name}</h5>
        <p>Region: <em>{props.region}</em></p>
        <p>ABV: <em>{props.abv}%</em></p>
        <p>IBU: <em>{props.ibu}</em></p>
        <p>Price: <em>${props.price}</em></p>
        <p>Pints available: <em>{stockCheck}</em></p>
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,  
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;