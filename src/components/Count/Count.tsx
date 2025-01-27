import Button from "../Button/Button.tsx";

type CountPropsType = {
    count: number
    setCount: (count: number) => void;
    maxValue: number
    removeButton: () => void
}

const Count = (props: CountPropsType) => {

    const onClickPlusButton = () => {
        props.setCount(props.count + 1);
    }

    const onClickRemoveButton = () => {
        props.removeButton()
    }

    return (
        <div>
            <>
                {props.count <= props.maxValue ? props.count : <div>Incorrect Value</div>}
                <Button name={'+'} callback={onClickPlusButton}/>
                <Button name={'Remove'} callback={onClickRemoveButton}/>
            </>
        </div>
    );
};

export default Count;