import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggle(props.item);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;