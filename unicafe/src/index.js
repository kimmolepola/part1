import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({dic}) => {
  let sum = dic.good-dic.bad
  let count = dic.good+dic.neutral+dic.bad

  if (count===0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
      <table>
        <tbody>
        <Statistic text={"good"} value={dic.good}/>
        <Statistic text={"neutral"} value={dic.neutral}/>
        <Statistic text={"bad"} value={dic.bad}/>
        <Statistic text={"all"} value={dic.good + dic.neutral + dic.bad}/>
        <Statistic text={"average"} value={sum/count}/>
        <Statistic text={"positive"} value={(dic.good/count*100)+" %"}/>
        </tbody>
      </table>
    )
}

const Buttons = ({dic}) => {
  return (
    <div>
      <Button setValue={dic.setGood} value={dic.good} buttonText={"good"}/>
      <Button setValue={dic.setNeutral} value={dic.neutral} buttonText={"neutral"}/>
      <Button setValue={dic.setBad} value={dic.bad} buttonText={"bad"}/>
    </div>
  )
}

const Button = ({setValue, value, buttonText}) => {
  const increaseValue = () => setValue(value + 1)
  return (
      <button onClick={increaseValue}>{buttonText}</button>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let dic = {good: good, setGood: setGood, neutral: neutral, setNeutral: setNeutral, bad: bad, setBad: setBad}

  return (
    <div>
      <Header text={"give feedback"}/>
      <Buttons dic={dic}/>
      <Header text={"statistics"}/>
      <Statistics dic={dic}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

