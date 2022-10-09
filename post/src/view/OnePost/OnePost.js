import React from 'react'
import Header from './Header'
import Button from './Button'
import classes from './OnePost.module.scss'

function OnePost(props) {

  const goToEditeChildren = (id) => {
    props.goToEdite(id)
  }
  return (
    <div
      key={props.id}
      className={classes.gridItem} >
      <Header>
        <h2
          className='title title-2'
        >
          Temat Posta:
          <span>{props.title}</span>
        </h2>

      </Header>
      <p>Autor:
        <span>
          {props.name}
        </span>
      </p>
      <div>
        <p>{props.body}</p>
      </div>

      

      <Button >
      <button onClick={() => goToEditeChildren(props.id, props.userId)}>Edytuj zabiera do strony edytowania</button>
      </Button>
    </div>
  )
}

export default OnePost