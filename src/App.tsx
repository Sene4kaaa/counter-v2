import {useState} from 'react'
import './App.css'
import Count from "./components/Count/Count.tsx";
import Settings from "./components/Settings/Settings.tsx";
import Button from "./components/Button/Button.tsx";

function App() {
    const [count, setCount] = useState(0);
    const [settings, setSettings] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(100)
    const [minValue, setMinValue] = useState<number>(-100)
    const [startValue, setStartValue] = useState<number>(0)


    const onClickSettingsOn = () => {
        setSettings(!settings)
    }

    const removeButton = () => {
        setCount(0)
        setMaxValue(100)
        setMinValue(-100)
        setStartValue(0)
    }

    return (
        <div className={'Count'}>
            {
                settings ? <Settings
                        maxValue={maxValue}
                        startValue={startValue}
                        minValue={minValue}
                        setMaxValue={setMaxValue}
                        setStartValue={setStartValue}
                        setMinValue={setMinValue}
                        settings={settings}
                        setSettings={setSettings}
                        setCount={setCount}

                    />
                    :
                    <div>
                        <Count
                            count={count}
                            setCount={setCount}
                            maxValue={maxValue}
                            minValue={minValue}
                            removeButton={removeButton}
                        />
                        <Button name={'Settings'} callback={onClickSettingsOn}/>
                    </div>
            }
        </div>
    )
}

export default App
