import React from 'react'

function OnePost(props) {

    const goToEdite = (id) => {
        props.goToEdite(id)
    }
  return (
    <div 
        key={props.id} 
        className='grid-item'>
    <h2 
        className='title title-2'
    >
        Temat Posta:
        <span>{props.title}</span>
    </h2>
    <p>Autor:
      <span>
        {props.name}
      </span>
    </p>
    <div>
      <p>{props.body}</p>
    </div>

    <button onClick={() => goToEdite(props.id)}>Edytuj zabiera do strony edytowania</button>

  </div>
  )
}

export default OnePost