import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingIncrease, onClickingDecrease } = props;
  const pints = keg.pints === 0 ? "Out of Stock" : keg.pints;

  const buyButton = keg.pints === 0 ? <p></p> : <button onClick={() => onClickingDecrease(keg.id)}>Buy</button>
  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="headingFont card-header text-center text-black" style={{fontSize: 24, color: "black"}}>{keg.brand}</div>
          <div className="card-body">
            <h1>Keg Details:</h1>
            <hr />
            <h2>Brand: {keg.brand}</h2>
            <h3>Name: {keg.name}</h3>
            <h5>Region: <em>{keg.name}</em></h5>
            <hr />
            <p>ABV: <em>{keg.color}</em></p>
            <p>Size: <em>{keg.size}</em></p>
            <p>Price: <em>${keg.price}</em></p>
            <p>Pints Available: <em>{pints}</em></p>
          </div>
          <div className="card-footer justify-content-center">
          {buyButton}
          <br/>
            <button onClick={props.onClickingEdit} className="btn shadow mr-2 updateBtn">Update Keg</button>
            <button onClick={() => onClickingDelete(keg.id)} className="btn shadow deleteBtn">Delete Keg</button>
            <button onClick={() => onClickingIncrease(keg.id)} className="btn shadow deleteBtn">Restock</button>
          </div>
        </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func,
  onClickingDecrease: PropTypes.func
}

export default KegDetail