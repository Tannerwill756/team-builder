import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



function Form(props) {

    const editMem = props.memberToEdit;
    


    return (
      <form onSubmit={props.onFormSubmit}>
          <label> Full Name:
              <input onChange={props.onInputChange} value={props.formValues.fullName} name='fullName' type='text'/>
          </label><br/>
          <label> Email:
              <input onChange={props.onInputChange} value={props.formValues.email} name='email' type='text'/>
          </label><br/>
          <label> Role:
              <input onChange={props.onInputChange} value={props.formValues.role} name='role' type='text'/>
          </label><br/>

            <button>Submit</button>

      </form>
    )
  }

  export default Form;