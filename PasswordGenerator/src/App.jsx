
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=1; i< length; i++){
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length, numAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-white'>
        <h1 className='text-3xl text-center font-bold mb-2'>Password Generator</h1>
        <div className='flex  text-black shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text" name="" id="" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-bl'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)} />
            <label htmlFor="length"> length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} onChange={() => { setNumAllowed((prev)=> !prev)}} />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev)=> !prev)}} />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
