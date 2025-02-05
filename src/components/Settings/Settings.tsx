import {ChangeEvent} from "react";
import Button from "../Button/Button.tsx";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCount: (count: number) => void
    disabled: boolean
    setDisabled: (disabled: boolean) => void

}

const Settings = (props: SettingsPropsType) => {


    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value
        props.setMaxValue(newMaxValue)
        props.setDisabled(false)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = +e.currentTarget.value
        props.setStartValue(newStartValue)
        props.setDisabled(false)
    }


    const onClickSettingsOff = () => {
        props.setCount(props.startValue)
        props.setDisabled(true)


    }

    return (
        <>
            <div className={'SettingsInput'}>
                <div>
                    <span className={'Span'}>MAX VALUE:</span>
                    <input
                        className={'InputValue'}
                        type={"number"}
                        value={props.maxValue}
                        onChange={onChangeHandlerMaxValue}/>
                </div>
                <div>
                    <span className={'Span'}>START VALUE:</span>
                    <input
                        className={'InputValue'}
                        type={"number"}
                        value={props.startValue}
                        onChange={onChangeHandlerStartValue}/>
                </div>
            </div>

            <div className={'Button'}>
                <Button name={"Set"} callback={onClickSettingsOff} disabled={props.disabled}/>
            </div>
        </>
    )
        ;
};

export default Settings;