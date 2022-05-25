import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import Member from './Components/Member'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamList, setTeamList] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState("")

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.name){
      setFormErrors("Please Enter Name");
      return;
    }

    setTeamList(teamList.concat(newMember))
    setFormValues(initialFormValues)

    
  }

  return (
    <>
    <header>Team Builder Form</header>
    {formErrors && <h3>{formErrors}</h3>}
    <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
    
    {teamList.map((mem, idx) => {
      return <Member key={idx} info={mem} />
    })}
    </>
  );
}

export default App;
