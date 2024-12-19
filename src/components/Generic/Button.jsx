import PropTypes from "prop-types"
function Button({
  type = 'button',
  className = '',
  onClick = () => {},
  btnLabel,
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {btnLabel}
    </button>
  )
}

Button.propTypes = {
  btnLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
