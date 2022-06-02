import React from 'react';
// import { v4 } from 'uuid';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
// import KegDetail from './KegDetail';
// import EditKegForm from './EditKegForm';
import KegData from './KegData';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: KegData,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg =this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleIncreasingKegStock = (id) => {
    // if(this.state.mainKegList > 1) {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
      selectedKeg.items++;
      console.log("Current pint: " + this.state.mainKegList.concat(selectedKeg));
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
      this.setState({mainKegList:newMainKegList});
    // } else {
    //   const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
    //   selectedKeg.items++;
    //   console.log("We in the else");
    //   const newKegListArray = this.state.mainKegList;
    //   const changedKegArray = newKegListArray.concat(selectedKeg);
    //   this.setState({
    //     mainKegList: changedKegArray
    //   });
    //}
  }

  handleDecreasingKegStock = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
    //  if(selectedKeg.items > 1) 
    {
      selectedKeg.items--;
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
      this.setState({mainKegList:newMainKegList});
    } 
    // else {
    //   const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
    //   selectedKeg.items--;
    //   const newKegListArray = this.state.mainKegList;
    //   const changedKegArray = newKegListArray.concat(selectedKeg);
    //   this.setState({
    //     mainKegList: changedKegArray,
    //   });
    // }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg}
        onClickingDecrease={this.handleDecreasingKegStock}
        onClickingIncrease={this.handleIncreasingKegStock}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
      buttonText = "Add Keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;