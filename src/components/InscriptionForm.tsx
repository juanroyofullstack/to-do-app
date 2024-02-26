import './InscriptionForm.scss'

import React, { useState, createContext } from 'react'
import { useDispatch } from "react-redux"

import { addProject } from '../store/actionCreators'

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
      }

    const submitForm = (e: React.SyntheticEvent): CreateAction => {
      e.preventDefault()
      createContext({ projectCreated: true})
      return dispatch(addProject(formData))
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