import React, { useState } from "react";

export default function TeamForm(props) {
    const { values, update, submit } = props;

    const onChange = evt =>{

    }

    const onSubmit = evt => {
        evt.preventDefault()
    }


    return (
       <form className="form-container" onSubmit={onSubmit}>
           <div className="form-input">
                <label>Name
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Enter Full Name"
                        maxLength="30"
                    />
                </label>
                <label>Email
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="Enter Email Address"
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">Select a Role</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Student">Student</option>
                        <option value="TA">TA</option>
                    </select>
                </label>
                <div className='submit'>
                    <button 
                        disabled={!values.name || !values.email || !values.role} >Submit
                    </button>
                </div>
            </div>
            </form>
    )
}