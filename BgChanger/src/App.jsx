import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-400' onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-400' onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-orange-400' onClick={() => setColor('orange')}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
