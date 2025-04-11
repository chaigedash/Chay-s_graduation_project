import { TabBar } from 'antd-mobile'
import {
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  BarChartOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useState } from 'react'
import './App.css'
import Resource from './components/Resource/Resource'
import Exam from './components/Exam/Exam'
import Auth from './components/Auth/Auth'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeKey, setActiveKey] = useState('home')

  if (!isLoggedIn) {
    return <Auth onLoginSuccess={() => setIsLoggedIn(true)} />
  }

  const tabs = [
    {
      key: 'home',
      title: '主页',
      icon: <HomeOutlined />
    },
    {
      key: 'resource',
      title: '资源',
      icon: <AppstoreOutlined />
    },
    {
      key: 'exam',
      title: '试题',
      icon: <FileTextOutlined />
    },
    {
      key: 'data',
      title: '数据',
      icon: <BarChartOutlined />
    },
    {
      key: 'user',
      title: '用户',
      icon: <UserOutlined />
    }
  ]

  return (
    <div className="app-container">
      <div className="content">
        {activeKey === 'home' && (
          <div className="home-container">
            <div className="logo">
              <span>低</span>
              <span>空</span>
              <span>经</span>
              <span>济</span>
            </div>
          </div>
        )}
        {activeKey === 'resource' && <Resource />}
        {activeKey === 'exam' && <Exam />}
      </div>
      <TabBar activeKey={activeKey} onChange={setActiveKey}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default App
