import React, { Component } from "react";

export default class TeamOmegaButtons extends Component {
  render() {
    let { handleSubmit, toggle, target, value } = this.props;
    return (
      <div>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-2"
          onClick={handleSubmit}
          data-bs-toggle={toggle} data-bs-target={target}
          
        >
          {value}
        </button>
      </div>
    );
  }
}
