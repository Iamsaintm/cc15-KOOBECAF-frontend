function Button({type, text, onClick}) {
    return (
      <button type={type} onClick={onClick} className="">
          {text}
      </button>
    )
  }
  
  export default Button