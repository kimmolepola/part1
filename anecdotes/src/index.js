import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const CreateRandomInt = (max) => Math.floor(Math.random() * max)

const NextButton = ({ setSelected }) => {
    const setValue = () => setSelected(CreateRandomInt(anecdotes.length))
    return (<button onClick={setValue}>next anecdote</button>)
}

const VoteButton = ({ setHighestVoteIndex, votes, setVotes, selected }) => {
    const addVote = () => {
        const newVotes = [...votes]
        newVotes[selected]++
        setVotes(newVotes)
        setHighestVoteIndex(HighestVoteIndex(newVotes))
    }
    return (<button onClick={addVote}>vote</button>)
}

const HighestVoteIndex = (votes, selected) => {
    let highestVoteIndex = 0
    let highestVoteAmount = votes[0]
    for (let step = 1; step < votes.length; step++) {
        if (votes[step] > highestVoteAmount) {
            highestVoteAmount = votes[step]
            highestVoteIndex = step
        }
    }
    return highestVoteIndex
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [highestVoteIndex, setHighestVoteIndex] = useState(0)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}<br/>
            has {votes[selected]} votes<br/>
            <VoteButton setHighestVoteIndex={setHighestVoteIndex} votes={votes} setVotes={setVotes} selected={selected} />
            <NextButton setSelected={setSelected} /></p>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[highestVoteIndex]}<br/>
            has {votes[highestVoteIndex]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)