import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './addItemForm.css'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class AddItemForm extends Component {
  handleSubmit = e => {
    const { form: { validateFields, resetFields }, onSubmit } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
        resetFields()
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form
    
    return (
      <Form onSubmit={this.handleSubmit} className="add-item-form">
        <FormItem className="item-input">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your item!' }, 
            {
              max: 100, message: 'A Item can contain up to 100 characters'
            }],
          })(
            <Input placeholder="add your new shopping list item..." />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            add
          </Button>
        </FormItem>
      </Form>
    )
  }
}

AddItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form.create()(AddItemForm)