type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button
                onClick={props.callback}
                disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;