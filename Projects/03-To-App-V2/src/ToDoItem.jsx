import React from 'react'

const ToDoItem = ({ ItemName, ItemDate }) => {
    return (
        <div className="container">
            <div className="row custom-row ">
                <div className="col-6">
                    {ItemName}
                </div>
                <div className="col-4">
                    {ItemDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger custom-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem
