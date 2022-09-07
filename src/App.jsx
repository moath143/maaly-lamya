import React, {useState, useEffect} from 'react'
import PostApi from './components/PostApi'
import PostCom from './components/PostCom'
import Usercomp from './components/Usercomp'
import axios from 'axios'
import Form from './components/Form'
// const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const App = () => {

  // const fetchData = () => {
  //   axios.get(baseUrl).then((res) => {
  //     console.log(res, 'res')
  //     console.log(res.data, 'res data')
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div>
      <PostCom />
      {/* <Usercomp /> */}
      {/* <PostApi /> */}
      <Form />
    </div>
  )
}

export default App
