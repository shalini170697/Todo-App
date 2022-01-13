import React, { Component } from "react";
import ListGroup from "./Listgroup";

export default class TodoListApp extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;
    return (
      <>
      <h3 className="text-capitalize text-center mt-5">todo list</h3>

      
      <ul className="list-group my-5">
        
        {items.map((item) => {
          return (
            <ListGroup
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
      </ul>
      </>
    );
  }
}
