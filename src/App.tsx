import {useState} from 'react'
import './App.css'
import Count from "./components/Count/Count.tsx";
import Settings from "./components/Settings/Settings.tsx";
import Button from "./components/Button/Button.tsx";

function App() {
    const [count, setCount] = useState(0);
    const [settings, setSettings] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)


    const onClickSettingsOn = () => {
        setSettings(!settings)
    }


    return (
        <>
            {
                settings ? <Settings
                        maxValue={maxValue}
                        startValue={count}
                        setMaxValue={setMaxValue}
                        setStartValue={setCount}
                    />
                    : <Count
                        count={count}
                        setCount={setCount}
                        maxValue={maxValue}
                    />
            }
            <Button name={'Settings'} callback={onClickSettingsOn}/>

        </>
    )
}

export default App
