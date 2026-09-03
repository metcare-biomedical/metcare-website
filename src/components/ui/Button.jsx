import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;
