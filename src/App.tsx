import {useState} from 'react'
import './App.css'
import Count from "./components/Count/Count.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Count count={count} setCount={setCount}/>
        </>
    )
}

export default App
