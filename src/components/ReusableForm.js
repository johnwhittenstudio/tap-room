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
          placeholder="Pints in stock" />
          <button type='submit'>{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  formText: PropTypes.string
}; 

export default ReusableForm;