import React, { useState } from 'react'

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }
  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }
  return maxIndex;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))
  const [most, setMost] = useState(0)

  const selectAneq = () => {
    setSelected(Math.floor(Math.random() * 7))
  }
  const voteAneq = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setMost(indexOfMax(copy))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      <p> has {points[selected]} votes </p>
      <Button onClick={selectAneq} text={"Next Aneqdote"} />
      <Button onClick={voteAneq} text={"Vote"} />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[most]}
    </div>
  )
}

export default App