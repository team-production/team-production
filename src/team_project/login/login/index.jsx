import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import '../index.scss'
// 注册页
class NormalLoginForm extends Component {
  constructor() {
    super()
  }
  // 提交
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password.length < 6) {
          alert('密码不能少于6位')
        } else if (!values.treaty) {
          alert('请选中协议！~')
        } else {
          let userData = JSON.parse(window.localStorage.getItem('user'))
          // console.log(values)
          // 用户是否被注册过
          if (!userData) {
            alert('此用户还未注册！~')
            return
          }
          let hasUser = userData.filter((item, index) => {
            return values.username === item.username
          })
          if (!hasUser.length) {
            alert('此用户还未注册！~')
          } else {
            // 如果存在用户那么验证密码
            hasUser = hasUser.filter(item => {
              return values.password === item.password
            })
            if (!hasUser.length) {
              alert('用户密码错误')
            } else {
              alert('登录成功')

              window.localStorage.setItem('token', 'ok')

              this.props.toggle('home', 'ok')
            }
          }
        }
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { toggle } = this.props
    return (
      <div className="login">
        <h2>登录</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <div className="wrap-form-treaty">
              {getFieldDecorator('treaty', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>treaty me</Checkbox>)}
              <a
                className="login-form-forgot"
                href=""
                onClick={e => {
                  e.preventDefault()
                  return toggle('register')
                }}
              >
                register user
              </a>
            </div>

            <label className="wrap-form-btn">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                login
              </Button>
            </label>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

// 绑定this.props.form属性
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
)
export default WrappedNormalLoginForm
