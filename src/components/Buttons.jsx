import "./button.css";

const Button = ({ buttonText, buttonClass, btnHandler, id }) => {
  return (
    <div className="container btn">
      <button className={buttonClass} data-button-id={id} onClick={btnHandler}>
        <p data-button-id={id}>{buttonText}</p>
      </button>
    </div>
  );
};

export default Button;
