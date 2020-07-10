import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import IconDemo from './lib/icon/icon.demo'
import ButtonExample from './lib/button/button.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExampe from './lib/layout/layout.example'
import FormExampe from './lib/form/form.example'
import InputExample from './lib/input/input.example'
import  {Aside, Layout, Content, Header, Footer}from './lib/layout/layout'
import './example.scss'
const logo = require('./logo.png') 

ReactDOM.render((
    <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo.default} alt="" />
          <span>MOUI</span>  
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-content">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExampe}/>
          <Route path="/form" component={FormExampe}/>
          <Route path="/input" component={InputExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">&copy;momo</Footer>
    </Layout>
  </Router>
),document.querySelector('#root'))