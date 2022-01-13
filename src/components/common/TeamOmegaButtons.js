import React, { PureComponent } from "react";

export default class TeamOmegaButtons extends PureComponent {
  render() {
    let { handleSubmit, toggle, target, value } = this.props;
    return (
      <div>
        <button
          type="submit"
          className="btn btn-block btn-primary"
          onClick={handleSubmit}
          data-bs-toggle={toggle} data-bs-target={target}
          
        >
          {value}
        </button>
      </div>
    );
  }
}