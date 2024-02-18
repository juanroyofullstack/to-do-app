import './InscriptionForm.scss'

import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { addTask } from '../store/actionCreators'

interface WelcomeFormInterface {
    name: string;
    projectname: string;
}

export const InscriptionForm = (): JSX.Element => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState<WelcomeFormInterface>({
       name: '',
       projectname: ''
      })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
      }
      const submitForm = () => {
        dispatch(addTask({title: 'asf', body: 'asfafa'}))
        return formData
      }
    return (
      <div className="InscriptionForm">
        <form onSubmit={submitForm}>
            <input name="name"  onChange={handleChange}/>
            <input name="projectname"  onChange={handleChange}/>
            <button type="submit">Create Project</button>
          </form>
      </div>
    )
}