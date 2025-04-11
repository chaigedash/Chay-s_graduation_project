import { Form, Input, Button, Toast } from 'antd-mobile'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import './Auth.css'

const Register = ({ onSwitchToLogin }: { onSwitchToLogin: () => void }) => {
  const onFinish = (values: any) => {
    console.log('注册信息:', values)
    Toast.show({
      content: '注册成功',
      position: 'center',
    })
  }

  return (
    <div className="auth-container">
      <h2>注册</h2>
      <Form
        layout='horizontal'  // 改为水平布局
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary'>
            注册
          </Button>
        }
      >
        <Form.Item name='username' label='用户名'>
          <Input 
            placeholder='请输入用户名' 
            className='auth-input'
          />
        </Form.Item>
        <Form.Item name='email' label='邮箱'>
          <Input 
            placeholder='请输入邮箱' 
            className='auth-input'
          />
        </Form.Item>
        <Form.Item name='password' label='密码'>
          <Input 
            type='password' 
            placeholder='请输入密码' 
            className='auth-input'
          />
        </Form.Item>
        <Form.Item name='confirmPassword' label='确认密码'>
          <Input 
            type='password' 
            placeholder='请再次输入密码' 
            className='auth-input'
          />
        </Form.Item>
      </Form>
      <div className="auth-footer">
        <span>已有账号？</span>
        <Button fill='none' onClick={onSwitchToLogin}>
          立即登录
        </Button>
      </div>
    </div>
  )
}

export default Register