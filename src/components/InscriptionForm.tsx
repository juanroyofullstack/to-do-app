import React, { useState } from 'react'

// interface WelcomeFormInterface {
//     name: string;
//     projectname: string;
// }

export const InscriptionForm = () => {

    const [formData, setFormData] = useState ({
       name: '',
       projectname: ''
      })

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
      }
      const submitForm = () => {
        return formData
      }
    return (
    <form onSubmit={submitForm}>
        <input name="name"  onChange={handleChange}/>
        <input name="projectname"  onChange={handleChange}/>
        <button type="submit"></button>
      </form>
    )
}