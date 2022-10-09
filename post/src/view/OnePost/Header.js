import React from 'react'
import './Header.scss'

function Header(props) {
    console.log(props)
  return (
    <div className='wraper'>

        {props.children}

    </div>
  )
}

export default Header