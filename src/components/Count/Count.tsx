import Button from "../Button/Button.tsx";

type CountPropsType = {
    count: number
    setCount: (count: number) => void;
    maxValue: number
    removeButton: () => void
    minValue: number
}

const Count = (props: CountPropsType) => {

    const onClickPlusButton = () => {
        props.setCount(props.count + 1);
    }

    const onClickMinusButton = () => {
        props.setCount(props.count - 1);
    }

    const onClickRemoveButton = () => {
        props.removeButton()
    }

    return (
        <div>
            <>
                {props.count <= props.maxValue && props.count >= props.minValue ? props.count :
                    <div>Incorrect Value</div>}
                <Button name={'+'} callback={onClickPlusButton} disabled={props.count > props.maxValue}/>
                <Button name={'-'} callback={onClickMinusButton} disabled={props.count < props.minValue}/>
                <Button name={'Remove'} callback={onClickRemoveButton}/>
            </>
        </div>
    );
};

export default Count;