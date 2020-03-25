import React, {useState} from 'react';

import './App.css';
import { v4 as uuid } from 'uuid';
import Form from './components/Form';

const initialTeamMembers = [
  { id: uuid(), fullName:'Billy Bob', email:'BillyBob@gmail.com', role:'backend engineer'},
  { id: uuid(), fullName:'Tanner Williams', email:'tannerwill756@gmail.com', role:'frontend engineer'}
]


function App() {

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const [ formValues, setFormValues ] = useState({
    fullName:'',
    email:'',
    role:'',
  })


  const onInputChange = event => {
      const inputThatChanged = event.target.name;
      const newValueForInput = event.target.value;

      setFormValues({ ...formValues, [inputThatChanged]: newValueForInput })
  }

  const onFormSubmit = event => {
      event.preventDefault();

      const newTeamMember = {
          id: uuid(),
          fullName: formValues.fullName,
          email: formValues.email,
          role: formValues.role
      }
      setTeamMembers([...teamMembers, newTeamMember])
  }

  const [editMember, setEditMember] = useState({})

  function memberToEdit () {
    console.log('yurrrt')
  }
  

  return (
    <div className="App">
      
      <Form onInputChange={onInputChange} formValues={formValues} onFormSubmit={onFormSubmit}/>

      <h3>List of Team Members:</h3>
        {
            teamMembers.map( info => <div key={info.id}>{info.fullName} - Email: {info.email} Role: {info.role} <button onClick={memberToEdit}>edit</button></div>)
        }

    </div>
  );
}



export default App;
