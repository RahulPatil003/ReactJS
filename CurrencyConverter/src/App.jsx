
import { useState } from 'react'
import './App.css'
import {InputBox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount ,  setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setForm(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  } 
  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      <div className='w-full'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg  p-5  backdrop-blur-sm bg-white/50">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'> 
              <InputBox label="from"
              value={amount}
              currencyOptions={options}  />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
