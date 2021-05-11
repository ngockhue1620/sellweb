import { FastField, Form, Formik } from "formik";
import React from "react";

import { Button, FormGroup, Label, Spinner, Alert } from "reactstrap";
import InputField from "../InputField/InputField";

export default function CustomForm(props) {
    const { btnLabel, listFormGroups, message } = props;

    const initialValues = {};
    return (
        <Formik initialValues={initialValues} onSubmit={props.onSubmit}>
            {(formikProps) => {
                const { values, errors, touched, isSubmitting } = formikProps;
                // console.log({ values, errors, touched });

                return (
                    <Form>
                        {listFormGroups.map((formGroup) => {
                            initialValues[formGroup.label.toLowerCase()] = "";
                            return (
                                <FastField
                                    name={formGroup.label.toLowerCase()}
                                    component={InputField}
                                    type={formGroup.type}
                                    label={formGroup.label}
                                    placeholder={formGroup.placeholder}
                                ></FastField>
                            );

                        })}

                        {message&&<Alert className="error">{message}</Alert>}

                        <FormGroup>
                            <Button type="submit" color="primary">
                                {isSubmitting && <Spinner size="sm" />}
                                {btnLabel}
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}
