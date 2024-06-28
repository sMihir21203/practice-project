import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams([])
  return (
    
    <div className='bg-slate-700 text-3xl text-center text-white p-4'>User: <span className='text-3xl text-white font-bold'>{id}</span></div>
  )
}
