import {ChangeEvent} from "react";

type SettingsPropsType = {
    maxValue: number
    minValue: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
}

const Settings = (props: SettingsPropsType) => {

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
    }

    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
    }

    return (
        <>
            <div>
                MAX VALUE: <input type={"number"} onChange={onChangeHandlerMaxValue}/>
            </div>
            <div>
                MIN VALUE: <input type={"number"} onChange={onChangeHandlerMinValue}/>
            </div>
        </>
    )
        ;
};

export default Settings;