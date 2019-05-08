import React from 'react';

const courseForm = (props) =>
{
    return (
        <form onSubmit={props.addcourse}>
            <input type="text" onChange={props.updatecourse} value={props.curent} />
           <button>Add Course</button>
        </form>

    )
}

export default courseForm