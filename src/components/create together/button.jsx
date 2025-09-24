function Button({ classname, text, fontClass }) {
  return (
    <button className={classname}>
      <i className={fontClass}></i>
      {text}
    </button>
  )
}

export default Button
