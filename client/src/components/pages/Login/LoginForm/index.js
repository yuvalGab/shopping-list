import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './loginForm.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

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
          {getFieldDecorator('username', {
            rules: [{ 
              required: true, message: 'Please input your Psername' }, 
            {
              min: 5, message: 'Username must contain at least 5 characters'
            }, {
              max: 12, message: 'A Username can contain up to 12 characters'
            }]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ 
              required: true, message: 'Please input your Password' }, 
            {
              min: 6, message: 'Password must contain at least 6 characters'
            }, {
              max: 20, message: 'A Password can contain up to 20 characters'
            }]
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
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form.create()(LoginForm)