import React, { Component } from 'react'
import './footer.css'
import { Layout } from 'antd'

const { Footer: FooterLayout } = Layout

class Footer extends Component {
  render() {
    return (
      <FooterLayout className="footer">
        footer text
      </FooterLayout>  
    )
  }
}

export default Footer