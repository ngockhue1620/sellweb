import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
};
export default function InputField(props) {
    const { field, type, label, placeholder, disabled } = props;
    const { name } = field;
    return (
        <FormGroup>
            {label && <Label for={name}>{label}:</Label>}
            {type === "area" ? (
                <textarea
                    className="form-control"
                    id={name}
                    {...field}
                    disabled={disabled}
                    placeholder={placeholder}
                    rows="3"
                ></textarea>
            ) : (
                <Input
                    id={name}
                    {...field}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    required
                ></Input>
            )}
        </FormGroup>
    );
}
