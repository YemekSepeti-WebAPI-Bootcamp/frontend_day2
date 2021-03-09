import React from "react";
import PropTypes from "prop-types";

class FormInput extends React.Component {
  constructor() {
    // React componentin constructorünü çalıştırır
    super();
    // yeni bir state tanımı,
    // State: ilgili component ve alt componentlerin erişebileceği bir nesne.
    this.state = {
      textValue: "deneme",
    };
  }

  render() {
    // component props'undan koponent içinde kullanacağımız değerleri destructure ederek alıyoruz
    const { labelText, inputValue, setTextInputValue } = this.props;

    console.log("FormInput", this.state);

    const textInputStyle = {
      width: 300,
      height: 50,
      fontSize: 23,
      borderRadius: 8,
    };
    return (
      <div>
        <label value="Enter Todo" htmlFor="todo-text-input">
          {labelText}
        </label>
        <br />
        <input
          value={inputValue}
          onChange={(e) => {
            setTextInputValue(e.target.value);
          }}
          type="text"
          name="todo-text-input"
          style={textInputStyle}
        />
      </div>
    );
  }
}

// component prop'larının tiplerini belirtiyoruz.
// bunun en büyük faydası, bu komponenti başka sayfalarda kullanırken
// hangi propertylerin gerekli olduğunu görebilmemiz.
FormInput.propTypes = {
  labelText: PropTypes.string,
};

// flow
// typescript

export default FormInput;
