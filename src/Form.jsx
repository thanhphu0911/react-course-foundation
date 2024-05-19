import React from 'react'

/*
uncontroller input/component
- The input value is not being managed by React.
- use useRef to get value

controller input/component
- The input value is managed by React.
*/

function Form() {
  const [lastName, setLastName] = React.useState('')
  const firstNameRef = React.useRef();
  const [form, setForm] = React.useState({
    country: '',
    email: '',
  })

  function onSubmit() {
    // const firstName = document.getElementById('firstName');

    console.log("onSubmit: ", {
      firstName: firstNameRef.current.value,
      lastName,
      form
    })
  }

  function onChangeLastName(event) {
    setLastName(event.target.value)
  }

  function onChangeForm(event) {
    const { name, value } = event.target;
    // console.log('onChangeForm: ', {
    //   name: event.target.name,
    //   value: event.target.value
    // })
    // const newForm = {
    //   ...form,
    //   [name]: value
    // }
    // setForm(newForm)
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  console.log('Form re-render')

  return (
    <div>
      <h1>Form</h1>

      <h3>Uncontroller input</h3> <br />
      First Name: <input type="text" id="firstName" ref={firstNameRef} defaultValue="tony" /> <br />
      <br />
      <h3>Controller input</h3>
      Last Name: <input type="text" id="lastName" value={lastName} onChange={onChangeLastName} /> <br />

      <h3>Mutiple input</h3>
      Country: 
      <select name="country" value={form.country} onChange={onChangeForm}>
        <option value="VN">Viet Name</option>
        <option value="AUS">Australia</option>
        <option value="US">United State</option>
      </select> <br />
      Email <input type="text" name="email" value={form.email} onChange={onChangeForm} /> <br />


      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Form