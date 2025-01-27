import Button from "../Button/Button.tsx";

type CountPropsType = {
    startValue: number
    setStartValue: (setStartValue: number) => void
    maxValue: number
}

const Count = (props: CountPropsType) => {

    const onClickPlusButton = () => {
        props.setStartValue(props.startValue + 1);
    }

    const onClickRemoveButton = () => {
        props.setStartValue(0)
    }

    return (
        <div>
            <>
                {props.startValue <= props.maxValue ? props.startValue : 'MaxValue'}
                <Button name={'+'} callback={onClickPlusButton}/>
                <Button name={'Remove'} callback={onClickRemoveButton}/>
            </>
        </div>
    );
};

export default Count;