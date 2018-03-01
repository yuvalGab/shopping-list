import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './registerForm.css'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

const FormItem = Form.Item

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false
    }
  }
  
  handleSubmit = e => {
    const { form: { validateFieldsAndScroll }, onSubmit } = this.props
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    });
  }
  
  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  
  checkPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  
  checkConfirm = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form className="register-form" onSubmit={this.handleSubmit}>
        <FormItem label="Full Name">
          {getFieldDecorator('fullName', {
            rules: [{
              required: true, message: 'Please input your Full Name!'
            }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="E-mail">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!'
            }, {
              required: true, message: 'Please input your E-mail!'
            }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Username">
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: 'Please input your Username!'
            }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Password">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!'
            }, {
              validator: this.checkConfirm
            }]
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem label="Confirm Password">
          {getFieldDecorator('confirmPassword', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword
            }]
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
        Or <Link to="/login">login now!</Link>
      </Form>
    )
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form.create()(RegisterForm)