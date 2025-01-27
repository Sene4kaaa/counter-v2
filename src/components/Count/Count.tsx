import Button from "../Button/Button.tsx";

type CountPropsType = {
    count: number
    setCount: (count: number) => void;
    maxValue: number
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
            <>
                {props.count <= props.maxValue ? props.count : 'MAX VALUE'}
                <Button name={'+'} callback={onClickPlusButton}/>
                <Button name={'Remove'} callback={onClickRemoveButton}/>
            </>
        </div>
    );
};

export default Count;