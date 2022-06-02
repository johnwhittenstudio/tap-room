import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="brand"
          placeholder="Style" />
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="region"
          placeholder="Region" />
        <input
          type="number"
          min={1}
          name="abv"
          placeholder="ABV" />
        <input
          type="number"
          name="ibu"
          placeholder="IBU" />
        <input
          type="number"
          name="price"
          placeholder="Price" />
        <input 
          type="number"
          min={1}
          name="pints"
          placeholder="Number of Pints" />
          <button type='submit'>{props.buttonText}</button>
      </form>
      <hr />
      <br/>
      <h4>Keg Sizing Information</h4>
      <br/>
      <ul>
        <p>1/2 barrel = 15.5 gallons = <strong>124 pints</strong> = 165 12oz bottles - <strong>(Full Size Keg)</strong></p>
        <p>1/4 barrel = 7.75 gallons = <strong>62 pints</strong> = 83 12oz bottles - <strong>(Pony Keg)</strong></p>
        <p>1/6 barrel (20 Ltr) = 5.2 gallons = <strong>41 pints</strong> = 55 12oz bottles - <strong>(Sixtel)</strong></p>
        <p>50 Liter = 13.2 gallons = <strong>105 pints</strong> = 140 12oz bottles</p>
        <p>30 liter = 8.1 gallons = <strong>64 pints</strong> = 86 12oz bottles</p>
      </ul>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  formText: PropTypes.string
}; 

export default ReusableForm;