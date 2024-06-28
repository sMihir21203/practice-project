import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
  // const data = useLoaderData()

  const [data,setData] = useState([])
  useEffect(() => {
    // fetch('https://api.github.com/users/darshu1206')
    fetch('https://api.github.com/users/sMihir21203')
    .then(Response => Response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])
  
  return (
    <>
    <div className='grid place-content-center text-center m-4 text-white p-4 text-3xl bg-slate-700'>
    <img
    className='rounded-xl'
        src={data.avatar_url} alt="git pic" width="300" />
        GitHub Followers: {data.followers}
    </div>
    </>
  )
}

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/darshu1206')
//   return response.json()
// }
