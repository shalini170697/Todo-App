import React, { Component } from 'react'
import Button from './common/TeamOmegaButtons'
export default class ListGroup extends Component {
    render() {
        let { title, handleDelete, handleEdit } = this.props
        return (
            <>
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    <span className='mx-2 text-success' onClick={handleEdit} >
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className='fas fa-pen' />
                        </button>
                     </span>
                    <span className='mx-2 text-danger' onClick={handleDelete}>
                        <Button value={<i className='fas fa-trash' />}></Button>
                    </span>
                </div>
            </li>
            </>
        )
    }
}