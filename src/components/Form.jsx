import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addPost} from '../store/postSlice/getPostSlice'

const Form = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost({ title, body }));
        setTitle('')
        setBody('')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">add post</button>
      </form>
    </div>
  );
}

export default Form
