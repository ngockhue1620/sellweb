import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginPage extends Component {
    render() {
        return (
            <div className='LoginPage '>
                <div className='container'>
                <Form >
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter your password here" />
                    </FormGroup>

                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </Form>
                </div>
            </div>

        )
    }
}
