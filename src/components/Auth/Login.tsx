import { Form, Input, Button, Toast } from 'antd-mobile'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Auth.css'

const Login = ({ 
  onSwitchToRegister, 
  onLoginSuccess 
}: { 
  onSwitchToRegister: () => void;
  onLoginSuccess: () => void;
}) => {
  const onFinish = (values: any) => {
    console.log('登录信息:', values)
    Toast.show({
      content: '登录成功',
      position: 'center',
    })
    onLoginSuccess()  // 登录成功后调用回调
  }

  return (
    <div className="auth-container">
      <h2>登录</h2>
      <Form
        layout='horizontal'
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary'>
            登录
          </Button>
        }
      >
        <Form.Item name='username' label='用户名'>
          <Input 
            placeholder='请输入用户名' 
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
      </Form>
      <div className="auth-footer">
        <span>还没有账号？</span>
        <Button fill='none' onClick={onSwitchToRegister}>
          立即注册
        </Button>
      </div>
    </div>
  )
}

export default Login