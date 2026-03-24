import React from 'react'

const ToDoItem1 = () => {
    let ItemName = 'Go to College';
    let ItemDate = '15-03-2026';
    return (
        <div class="container">
            <div class="row custom-row ">
                <div class="col-6">
                    {ItemName}
                </div>
                <div class="col-4">
                    {ItemDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger custom-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem1
