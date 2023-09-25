import { useState } from 'react'

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad

  const getAverage = () => {
    const goodScore = good * 1
    const badScore = bad * -1

    return ((goodScore + badScore) / total) || 0
  }

  const getPositivePercent = () => {
    return good * 100 / total
  }

  if (!total) return (
    <div>
      No feedback given
    </div>
  )
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}></StatisticLine>
        <StatisticLine text="Neutral" value={neutral}></StatisticLine>
        <StatisticLine text="Bad" value={bad}></StatisticLine>
        <StatisticLine text="Average" value={getAverage()}></StatisticLine>
        <StatisticLine text="Positive" value={getPositivePercent()}></StatisticLine>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div className="buttons">
        <Button handler={() => setGood(good + 1)} text='Good'></Button>
        <Button handler={() => setNeutral(neutral + 1)} text='Neutral'></Button>
        <Button handler={() => setBad(bad + 1)} text='Bad'></Button>
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

export default App
