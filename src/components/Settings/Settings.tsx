import {ChangeEvent} from "react";
import Button from "../Button/Button.tsx";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCount: (count: number) => void
}

const Settings = (props: SettingsPropsType) => {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = +e.currentTarget.value
        props.setMaxValue(newMaxValue)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = +e.currentTarget.value
        props.setStartValue(newStartValue)
    }


    const onClickSettingsOff = () => {
        props.setCount(props.startValue)


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
                <Button name={"Set"} callback={onClickSettingsOff}/>
            </div>
        </>
    )
        ;
};

export default Settings;