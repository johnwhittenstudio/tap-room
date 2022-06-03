import React from 'react'
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';


function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      region: event.target.region.value, 
      abv: parseInt(event.target.abv.value), 
      ibu: parseInt(event.target.ibu.value), 
      pints: parseInt(event.target.pints.value), 
      price: parseInt(event.target.price.value), 
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      <div className="card shadow-lg h-100 text-left card bodyFont p-4 w-50 mx-auto" style={{backgroundColor: "white"}}>
      <h1 id="banner" className="headingFont" style={{backgroundColor: "#add8e6", color: "black"}}>Update This Keg</h1>
        <hr />
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText='Update Keg' />
      </div>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm
