import {useState} from 'react'
import './App.css'
import Count from "./components/Count/Count.tsx";
import Settings from "./components/Settings/Settings.tsx";


function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)


    const removeButton = () => {
        setCount(0)
        setMaxValue(5)
        setStartValue(0)
    }

    return (
        <div className={'SettingsAndCount'}>
            <div className={'Settings'}>
                <Settings
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setCount={setCount}
                />
            </div>
            <div className={'Count'}>
                <Count
                    count={count}
                    setCount={setCount}
                    maxValue={maxValue}
                    removeButton={removeButton}
                />
            </div>

        </div>
    )
}

export default App
