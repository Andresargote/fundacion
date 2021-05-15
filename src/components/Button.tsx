interface ButtonProps {
    className: string,
    children: string
}

export default function Button (props: ButtonProps) {
    return (
        <button className={props.className}>
            {props.children}
        </button>
    )
}