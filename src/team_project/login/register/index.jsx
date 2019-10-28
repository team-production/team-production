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
        console.log(values)
        if (values.password.length < 6) {
          alert('密码不能少于6位')
        } else if (values.password !== values.repassword) {
          alert('两次密码不一致！~')
        } else if (!values.treaty) {
          alert('请选中协议！~')
        } else {
          let oldData = JSON.parse(window.localStorage.getItem('user'))
          // 判断是否注册过
          if (oldData) {
            // 判断是否被注册过
            let key = oldData.filter(item => item.username === values.username)
            if (key.length) {
              //如果被注册过则重新输入
              alert('该用户名已被注册！~')
            } else {
              oldData.push(values)
              window.localStorage.setItem('user', JSON.stringify(oldData))
              alert('注册成功')
              this.props.toggle('login')
            }
          } else {
            // 注册第一个用户
            let dataList = [values]
            window.localStorage.setItem('user', JSON.stringify(dataList))
            alert('注册成功')
            this.props.toggle('login')
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
        <h2>注册</h2>
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
            {getFieldDecorator('repassword', {
              rules: [
                { required: true, message: 'Please input your repassword!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Repassword"
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
                  return toggle('login')
                }}
              >
                login user
              </a>
            </div>

            <label className="wrap-form-btn">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                register
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
