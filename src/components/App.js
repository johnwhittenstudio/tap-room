import '../App.css';
import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <div className="text-center" style={{backgroundColor: '#212529'}}>
        <Header />
      </div>
      <div className="container mb-5">
        <div className="text-center">
          <KegControl />
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;