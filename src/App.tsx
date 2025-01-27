import {useState} from 'react'
import './App.css'
import Count from "./components/Count/Count.tsx";
import Settings from "./components/Settings/Settings.tsx";
import Button from "./components/Button/Button.tsx";

function App() {
    const [count, setCount] = useState(0);
    const [settings, setSettings] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(100)
    const [startValue, setStartValue] = useState<number>(0)


    const onClickSettingsOn = () => {
        setSettings(!settings)
    }

    const removeButton = () => {
        setCount(0)
        setMaxValue(100)
        setStartValue(0)
    }

    return (
        <>
            {
                settings ? <Settings
                        maxValue={maxValue}
                        startValue={startValue}
                        setMaxValue={setMaxValue}
                        setStartValue={setStartValue}
                        settings={settings}
                        setSettings={setSettings}
                        setCount={setCount}

                    />
                    :
                    <>
                        <Count
                            count={count}
                            setCount={setCount}
                            maxValue={maxValue}
                            removeButton={removeButton}
                        />
                        <Button name={'Settings'} callback={onClickSettingsOn}/>
                    </>
            }
        </>
    )
}

export default App
