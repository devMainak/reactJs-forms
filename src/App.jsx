import { useState } from 'react'
import './App.css'

export default function App() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [interests, setInterest] = useState([])
    const [color, setColor] = useState('')
    const [formData, setFormData] = useState(false)

    const interestsHandler = (event) => {
      let value = event.target.value
      if (event.target.value)
      {
        setInterest([...interests, value])
      } else {
        setInterest(interests.filter(interest => interest != value))
      }
    }

   const formHandler = (event) => {
     event.preventDefault()
     
     if (name && address && gender && interests && color){
       setFormData(true)
     }
   }
  
  return (
    <main>
      <h1>User Profile Form</h1>
      <form onSubmit={formHandler}>
      <label htmlFor='userName'>Name: </label>
      <input id='userName' onChange={(event) => setName(event.target.value)}/> 
      <br/> <br/>
      <label htmlFor='userAddress'>Address: </label> <br/>
      <textarea id='userAddress' onChange={(event) => setAddress(event.target.value)} rows='4' cols='40'></textarea>
      <br/> <br/>
      <label>Gender:  </label> <br/>
      <input type='radio' value='female' name='gender' onChange={(event) => setGender(event.target.value)}/> Female<br/>
      <input type='radio' value='male' name='gender' onChange={(event) => setGender(event.target.value)}/> Male<br/>
      <input type='radio' value='others' name='gender' onChange={(event) => setGender(event.target.value)}/> Others
      <br/><br/>
      <label>Interests: </label><br/>
      <input type='checkbox' value='Reading' onChange={interestsHandler}/> Reading <br/>
       <input type='checkbox' value='Singing' onChange={interestsHandler}/> Singing <br/>
       <input type='checkbox' value='Painting' onChange={interestsHandler}/> Painting 
      <br/><br/>
      <label htmlFor='favColor'>Favorite Color:</label><br/>
      <select id='favColor' onChange={(event) => setColor(event.target.value)}>
        <option value='Red'>Red</option>
        <option value='Blue'>Blue</option>
        <option value='Yellow'>Yellow</option>
      </select>
        <br/><br/>
        <button type='submit'>Submit</button>
        </form>

      { formData &&
        <div>
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Favorite Color: {color}</p>
        </div>
      }
    </main>
  )
}
