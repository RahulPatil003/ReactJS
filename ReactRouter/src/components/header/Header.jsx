import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white w-[60%] border-gray-200 mx-auto px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <Link to='/' className='flex items-center'>
                <h1 className='text-3xl text-orange-600'>MyLogo</h1>
                </Link> 
                <div className='flex flex-col  basis-3/5 '>
                    <ul className='flex items-center justify-around '>
                        <li>
                            <NavLink to='/' className={({isActive})=> `border-gray-100 ${isActive ? 'text-orange-500' : 'text-black'}`}> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({isActive}) => `border-gray-100 ${isActive ? 'text-orange-500' : 'text-black'}`}> About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({isActive}) => `border-gray-100 ${isActive ? 'text-orange-500' : 'text-black'}`}> Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/github' className={({isActive}) => `border-gray-100 ${isActive ? 'text-orange-500' : 'text-black'}`}> Github</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user' className={({isActive}) => `border-gray-100 ${isActive ? 'text-orange-500' : 'text-black'}`}> User</NavLink>
                        </li>
                        
                    </ul>
                </div> 
                <div className='flex flex-nowrap justify-between px-3'>
                    <Link to='login/' className='px-2' >Login</Link>    
                    <Link to='signup/' className='px-2'>Signup</Link>
                </div>  
            </div>     
        </nav>
      </header>
    </div>
  )
}

export default Header
