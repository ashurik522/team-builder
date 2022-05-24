import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import Member from './Components/Member'
import axios from 

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamList, setTeamList] = useState([])
  const [formValues, setFormValues] = useState()

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamList(teamList.concat(newMember))
    setFormValues()

    
  }

  return (
    <>
    <header>Team Builder Form</header>
    <Form
      values={formValues}
      update={updateForm}
      sumbit={submitForm}
    />
    
    {teamList.map(mem => {
      return <Member key={mem.id} info={mem} />
    })}
    </>
  );
}

export default App;
