import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
}from 'react-icons/md';

import React from 'react';
import './TodoListItem.css';



const TodoListItem = () => {
    return (
        <div className='TodoListItem' >
                <div className='checkbox' >
                    <MdCheckBoxOutlineBlank/>
                    <div className='text' >할일</div>
                </div>
                <div className='remove' >
                    <MdRemoveCircleOutline/>
                </div>
            
        </div>
    );
};

export default TodoListItem;