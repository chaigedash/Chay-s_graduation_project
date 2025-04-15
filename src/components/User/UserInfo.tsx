import { Avatar, Button, Tag } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'
import './UserInfo.css'

const UserInfo = () => {
  const handleLogout = () => {
    // 处理退出登录逻辑
    console.log('退出登录')
  }

  return (
    <div className="user-info-container">
      <div className="info-card" onClick={() => console.log('点击了用户信息')}>
        <div className="avatar-section">
          <Avatar src="https://placeholder.com/150" className="user-avatar" />
        </div>
        
        <div className="user-details">
          <div className="user-name">张三</div>
          <div className="user-account">账号：00000001</div>
          <div className="user-role">管理员</div>
          <Tag className="user-tag" color='default'>企业员工</Tag>
        </div>

        <div className="arrow-section">
          <RightOutline />
        </div>
      </div>

      <div className="action-section">
        <Button block className="action-button">
          编辑信息
        </Button>
        <Button block className="action-button">
          修改密码
        </Button>
        <Button block className="action-button danger" onClick={handleLogout}>
          退出登录
        </Button>
      </div>
    </div>
  )
}

export default UserInfo