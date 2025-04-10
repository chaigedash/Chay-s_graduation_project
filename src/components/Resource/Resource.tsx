import { Button, List } from 'antd-mobile'
import { UploadOutlined, SettingOutlined } from '@ant-design/icons'
import './Resource.css'

const Resource = () => {
  const resources = [
    {
      id: 1,
      title: '低空经济发展白皮书2023',
      date: '2024-01-20',
      type: '文档'
    },
    {
      id: 2,
      title: '低空旅游产业解析',
      date: '2024-01-18',
      type: '视频'
    },
    {
      id: 3,
      title: '通航产业发展报告',
      date: '2024-01-15',
      type: '文档'
    },
    {
      id: 4,
      title: '低空旅游航线规划指南',
      date: '2024-01-12',
      type: '文档'
    },
    {
      id: 5,
      title: '低空经济示范区建设实录',
      date: '2024-01-10',
      type: '视频'
    }
  ]

  return (
    <div className="resource-container">
      <div className="resource-header">
        <Button className="header-button">
          <UploadOutlined /> 上传资源
        </Button>
        <Button className="header-button">
          <SettingOutlined /> 管理资源
        </Button>
      </div>

      <List className="resource-list">
        {resources.map(item => (
          <List.Item
            key={item.id}
            description={item.date}
            extra={item.type}
          >
            {item.title}
          </List.Item>
        ))}
      </List>

      <div className="pagination">
        <Button>上一页</Button>
        <span className="page-info">第 1 页 / 共 1 页</span>
        <Button>下一页</Button>
      </div>
    </div>
  )
}

export default Resource