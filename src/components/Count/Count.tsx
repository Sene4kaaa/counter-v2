import Button from "../Button/Button.tsx";

type CountPropsType = {
    count: number
    setCount: (count: number) => void;
}

const Count = (props: CountPropsType) => {
    return (
        <div>
            {props.count}
            <Button count={props.count} setCount={props.setCount}/>
        </div>
    );
};

export default Count;