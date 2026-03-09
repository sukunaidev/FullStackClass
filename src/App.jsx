// TODOForm, Table, Push that information into table
import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import { useState } from 'react'




function App() { //Compoent called App


  const [favLinks, setFavLinks] = useState([])

  let handleNewSubmission = (data) => {

    setFavLinks([...favLinks, data])
  }

  return (
    <div>
      <h1>Enter Your Favorite Links</h1>
      <p>Submit Link Below</p>

      <Form onNewSubmit={handleNewSubmission} />

      <Table links={favLinks} />




    </div>


  )
}

export default App
