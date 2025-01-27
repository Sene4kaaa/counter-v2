import {ChangeEvent} from "react";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
}

const Settings = (props: SettingsPropsType) => {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value)
        props.setStartValue(newStartValue)
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
                                  value={props.startValue}
                                  onChange={onChangeHandlerStartValue}/>
            </div>
        </>
    )
        ;
};

export default Settings;