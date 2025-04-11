import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? (
    <Login onSwitchToRegister={() => setIsLogin(false)} onLoginSuccess={onLoginSuccess} />
  ) : (
    <Register onSwitchToLogin={() => setIsLogin(true)} />
  )
}

export default Auth