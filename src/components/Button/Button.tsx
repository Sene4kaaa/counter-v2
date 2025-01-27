type ButtonPropsType = {
    name: string
    callback: () => void
}

const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button onClick={props.callback}>{props.name}</button>
        </div>
    );
};

export default Button;