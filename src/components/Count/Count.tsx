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

        <div className={'CounterAndButton'}>
            <h2 className={'H2'}>
                {props.count < props.maxValue  ? props.count :
                    <div className={'IncorrectValue'}>{props.count}</div>}</h2>
            <div className={'IncAndReset'}>
                <div className={'Inc'}>
                    <Button name={'inc'} callback={onClickPlusButton} disabled={props.count >= props.maxValue}/>
                </div>
                <div className={'Reset'}>
                    <Button name={'reset'} callback={onClickRemoveButton}/>
                </div>
            </div>
        </div>
    );
};

export default Count;