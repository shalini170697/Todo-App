import React, { Component } from "react";


export default class TeamOmegaInputBox extends Component {
  render() {
    let { item, handleChange} = this.props;
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add your todo"
            onChange={handleChange}
            
          />
          
        </div>
      </div>
    );
  }
}
