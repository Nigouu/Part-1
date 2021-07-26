import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }
  return(
  <div>
    <table>
        <tbody>
          <Statistic text="Good" value={props.good} />
          <Statistic text="Neutral" value={props.neutral} />
          <Statistic text="Bad" value={props.bad} />
          <Statistic text="All" value={props.all} />
          <Statistic text="Average" value={((props.good-props.bad)/props.all).toFixed(1)} />
          <Statistic text="Positive" value={((props.good/props.all)*100).toFixed(1)} text2="%"/>
        </tbody>
      </table>
  </div>
  )
}

const Statistic = ({text, value, text2}) =>(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{text2}</td>
    </tr>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all +1)
    setAverage((good-bad)/all)
    setPositive(good / all)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all +1)
    setAverage((good-bad)/all)
    setPositive(good / all)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all +1)
    setAverage((good-bad)/all)
    setPositive(good / all)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App