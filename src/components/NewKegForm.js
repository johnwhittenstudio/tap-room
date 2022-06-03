
import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      region: event.target.region.value, 
      abv: parseInt(event.target.abv.value), 
      ibu: parseInt(event.target.ibu.value), 
      price: parseInt(event.target.price.value), 
      pints: parseInt(event.target.pints.value), 
      id: v4()});
  }

  return (
    <React.Fragment>
      <div className="card shadow-lg h-100 text-left card body Font p-4 w-50 mx-auto" style={{backgroundColor: "white"}}>
        <h1 className="headingFont" style={{color: "black"}}>Add a New Keg</h1>
        <hr />
        <ReusableForm 
          formSubmissionHandler={handleNewKegFormSubmission}
          buttonText='Add Keg!' />
      </div>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm