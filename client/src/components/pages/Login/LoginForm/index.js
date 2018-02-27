import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './loginForm.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = e => {
    const { form: { validateFields }, onSubmit } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form  className="login-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button className="login-form-button" type="primary" htmlType="submit">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form.create()(LoginForm)