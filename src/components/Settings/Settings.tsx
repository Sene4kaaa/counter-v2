import {ChangeEvent} from "react";
import Button from "../Button/Button.tsx";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    minValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setMinValue: (value: number) => void
    settings: boolean
    setSettings: (settings: boolean) => void
    setCount: (count: number) => void
}

const Settings = (props: SettingsPropsType) => {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value
        props.setMaxValue(newMaxValue)
    }

    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = +e.currentTarget.value
        props.setMinValue(newMinValue)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = +e.currentTarget.value
        props.setStartValue(newStartValue)
    }


    const onClickSettingsOff = () => {
        props.setCount(props.startValue)
        props.setSettings(!props.settings)

    }

    return (
        <>
            <div>
                MAX VALUE: <input type={"number"}
                                  value={props.maxValue}
                                  onChange={onChangeHandlerMaxValue}/>
            </div>
            <div>
                MIN VALUE: <input type={"number"}
                                  value={props.minValue}
                                  onChange={onChangeHandlerMinValue}/>
            </div>
            <div>
                START VALUE: <input type={"number"}
                                    value={props.startValue}
                                    onChange={onChangeHandlerStartValue}/>
            </div>
            <Button name={"Accept"} callback={onClickSettingsOff}/>
        </>
    )
        ;
};

export default Settings;