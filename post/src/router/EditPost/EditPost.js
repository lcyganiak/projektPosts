import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { getOnePost } from './service/editPost.service';

function EditPost(props) {


const keys = Object.keys(props)
console.log(keys)

  const { id } = useParams() // alternatywa to const id = useParams().id
  const [post, setPost] = useState({})
  useEffect(() => (async () => {
    const respons = await getOnePost(id)
    setPost(respons.data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [])

  const title = useRef('')
  const body = useRef('')
  const savePost = () => {
   // logika wysłania na BE
   const EditedPost = {
    editTitle: title.current.value,
    editBody: body.current.value
   }
   console.log(EditedPost)
   setPost({...post, body: body.current.value, title: title.current.value})
  }


  return (
    <div>
      <h1>
        EditPost
      </h1>
      <div>
        <label>Tytuł</label>
        <input ref={title} type="text" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
      </div>
      <div>
        <label>Treść</label>
        <textarea ref={body} cols="30" rows="10" onChange={(e) => setPost({...post, body: e.target.value}) } value={post.body}></textarea>
      </div>
      <button onClick={savePost}>Save Post</button>


    </div>
  )
}

export default EditPost