import React, { Component } from 'react'
import './footer.css'
import { Layout, Icon } from 'antd'

const { Footer: FooterLayout } = Layout

class Footer extends Component {
  render() {
    return (
      <FooterLayout className="footer">
        <Icon type="copyright" />
        <span>developed by Yuval Gabian</span>
      </FooterLayout>  
    )
  }
}

export default Footer