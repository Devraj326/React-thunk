import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import {myStore} from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={myStore}>
        <Main/>
      </Provider>   
    </>
  )
}

export default App