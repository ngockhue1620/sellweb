import { FastField, Form, Formik } from "formik";
import { values } from "lodash-es";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import userApi from '../../../../api/userApi'
import { login } from "../../../../reducers/userSlice";
import InputField from "../InputField/InputField";

export default function CustomForm(props) {
    const dispatch=useDispatch()
    const { btnLabel,listFormGroups ,massage} = props;
   
    const initialValues = {};
    return (
        <Formik
        
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
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
                        <Label className="error">{massage}</Label>
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
