import React, { PureComponent } from "react";


export default class TeamOmegaInputBox extends PureComponent {
    handleChange = e => this.props.handlerChange(e.target.value)
    render() {
    let { item, focus } = this.props;
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-inline text-capitalize mx-3 input-box"
            placeholder="add your todo"
            onChange={this.handleChange}
            value={item}
            autoFocus={focus}
          />

        </div>
      </div>
    );
  }
}