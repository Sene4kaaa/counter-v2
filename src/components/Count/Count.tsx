import Button from "../Button/Button.tsx";

type CountPropsType = {
    count: number
    setCount: (count: number) => void;
}

const Count = (props: CountPropsType) => {

    const onClickPlusButton = () => {
        props.setCount(props.count + 1);
    }

    const onClickRemoveButton = () => {
        props.setCount(0)
    }

    return (
        <div>
            {props.count}
            <Button name={'+'} callback={onClickPlusButton}/>
            <Button name={'Remove'} callback={onClickRemoveButton}/>
        </div>
    );
};

export default Count;