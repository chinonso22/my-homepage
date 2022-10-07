import React from 'react'
import {useContext } from "react"
import AuthContext from '../src/pages/AuthContext'

const useAuths=() =>{
  
return useContext(AuthContext)

  
}

export default useAuths