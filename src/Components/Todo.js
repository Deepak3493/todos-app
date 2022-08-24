import React from 'react'
import {InputBox} from './InputBox'
import {ListItems} from './ListItems'
const Todo = () => {
  return (
    <div>
        <h1>TODO LIST</h1>
        <InputBox></InputBox>
        <ListItems></ListItems>
    </div>
  )
}

export default Todo