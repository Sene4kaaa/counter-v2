type ButtonPropsType = {
    count: number
    setCount: (count: number) => void;
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.setCount(props.count + 1);
    }

    return (
        <div>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default Button;