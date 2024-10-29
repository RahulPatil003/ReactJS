import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = React.useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/RahulPatil003')
    //     .then((response) => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         setData(data)
    //     })
    // })

    const data = useLoaderData()
    console.log(data)
  return (  
    <div className='text-sm  text-center'>
      Github followers : {data.followers}
      <img src={data.avatar_url}  width={200} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RahulPatil003')
    return response.json()
}