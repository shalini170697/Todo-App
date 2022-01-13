
import { Button } from 'bootstrap';
import React, { PureComponent } from 'react'
import TeamOmegaInputBox from './TeamOmegaInputBox';


export default class TeamOmegaModalPopup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            input: this.props.item.title
        }
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };
    handleSubmite = e => {
        e.preventDefault();
        this.props.onSubmit({ id: this.props.item.id, title: this.state.input })
    }
    render() {
        return (
            <>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form className="modal-content" onSubmit={this.handleSubmite}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Todo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <TeamOmegaInputBox
                                    handleChange={this.handleChange}
                                    item={this.state.input}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleSubmite}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}