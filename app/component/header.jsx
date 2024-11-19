import React from 'react'
import style from '@/app/styles/header.module.css'


const Header = () => {
  return (
    <header>
        <div className='text-center m-'>
            <h1 className={`${style.header}`}>To-Do List</h1>
        </div>
    </header>
  )
}

export default Header
