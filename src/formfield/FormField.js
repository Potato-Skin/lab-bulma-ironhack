import React from "react";
import "./FormField.css";

function FormField(props) {
  return (
    <div class="field" className="bulma-field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input
          class="input"
          type={props.type}
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
}

export default FormField;
