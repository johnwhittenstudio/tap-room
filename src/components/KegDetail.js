import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingIncrease, onClickingDecrease } = props;
  const pints = keg.pints === 0 ? "Out of Stock" : keg.pints;
  const buyButton = keg.pints === 0 ? <p></p> : <button className="btn shadow mr-2 btn-info" onClick={() => onClickingDecrease(keg.id)}>Buy</button>
  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="headingFont card-header text-center text-black" style={{fontSize: 24, backgroundColor: "#ffdcd2", color: "black"}}><em>Keg Details</em></div>
          <div className="card-body">
            <div class="row">
              <h2><strong>{keg.brand}</strong></h2>
            </div>
            <h3><strong>{keg.name}</strong></h3>
            <h5><em>{keg.region}</em></h5>
            <hr />
            <p>ABV: <em>{keg.abv}%</em></p>
            <p>IBU: <em>{keg.ibu}</em></p>
            <p>Price: <em><strong>${keg.price}</strong></em></p>
            <p>Pints Available: <em>{pints}</em></p>
          </div>
          <div className="card-footer justify-content-center" style={{backgroundColor: "white"}}>
          {buyButton}
          <br/>
            <button onClick={props.onClickingEdit} className="btn shadow mr-2 updateBtn btn-outline-secondary">Update Keg</button>
            <button onClick={() => onClickingDelete(keg.id)} className="btn shadow deleteBtn btn-outline-secondary">Delete Keg</button>
            <button onClick={() => onClickingIncrease(keg.id)} className="btn shadow deleteBtn btn-outline-secondary">Restock</button>
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