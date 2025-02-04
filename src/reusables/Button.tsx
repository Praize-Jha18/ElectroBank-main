type ButtonType = {
    text:String,
    function:React.MouseEventHandler<HTMLButtonElement>

}
const Button = (props:ButtonType) => {
  return (
<button onClick={props.function}>{props.text}</button>
)
}

export default Button