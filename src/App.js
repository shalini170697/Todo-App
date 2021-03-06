import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import TeamOmegaModalPopup from "./components/common/TeamOmegaModalPopup";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TeamOmegaHeader from "./components/common/TeamOmegaHeader";
import TodoListApp from "./components/TodoListApp";

import TeamOmegaInputBox from "./components/common/TeamOmegaInputBox";
import TeamOmegaButtons from "./components/common/TeamOmegaButtons";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    modalInput: "",
    show: false
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    if (newItem.title !== "") {
      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false
      });
    }
  };

  handleDelete = (id) => {
    const deletedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: deletedItems
    });
  };
  handleEdit = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);
    this.setState({
      modalInput: selectedItem,
      item: "",
      id: id,
      show: true
    });
  };
  handleClose = (e) => {

    this.setState({ show: false, item: "" });

  };
  saveChanges = element => {
    this.setState(prev => ({
      modalInput: "",
      item: "",
      id: "",
      items: [...prev.items.map(ele => (ele.id === element.id ? element : ele))],
      show: false
    }))
  }
  render() {

    return (
      <div className="container">
        <TeamOmegaHeader />
         
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <form className="d-flex justify-content-center mb-3" onSubmit={this.handleSubmit}>
              <TeamOmegaInputBox
              handlerChange={this.handleChange} 
              item={this.state.item}
              focus={true}
              />
              <TeamOmegaButtons onSubmit={this.handleSubmit} value="Add" />
            </form>
            <TodoListApp
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
            {this.state.show ? <TeamOmegaModalPopup
              item={this.state.modalInput}

              onSubmit={this.saveChanges}
              handleClose={this.handleClose}

              show={this.state.show}
            /> : null}

          </div>
        </div>
      </div>
    );
  }
}

export default App;