import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "black"}}>Currently On Tap</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      
      {props.kegList.map((keg) => 
        <div class="col mb-4">
          <div id="card" className="card shadow-lg h-100 text-left" >
            <br/>
            <Keg
              whenKegClicked = {props.onKegSelection}
              name={keg.name}
              brand={keg.brand}
              region={keg.region}
              abv={keg.abv}
              ibu={keg.ibu}
              price={keg.price}
              pints={keg.pints}
              id={keg.id}
              key={keg.id}/>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList