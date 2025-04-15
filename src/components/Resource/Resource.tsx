import { Button, List } from 'antd-mobile'
import { UploadOutlined, SettingOutlined } from '@ant-design/icons'
import './Resource.css'
import { useState } from 'react'
import ResourceDetail from './ResourceDetail'
import VideoDetail from './VideoDetail'

interface ResourceItem {
  id: number
  title: string
  date: string
  type: string
}

const Resource = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null)
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
  const [isManaging, setIsManaging] = useState(false)

  const handleDelete = (id: number) => {
    // 处理删除逻辑
    console.log('删除资源:', id)
  }

  const handleEdit = (resource: ResourceItem) => {
    // 处理编辑逻辑
    console.log('编辑资源:', resource.id)
  }

  return (
    <div className="resource-container">
      {selectedResource ? (
        selectedResource.type === '文档' ? (
          <ResourceDetail resource={selectedResource} />
        ) : (
          <VideoDetail resource={selectedResource} />
        )
      ) : (
        <>
          <div className="resource-header">
            <Button className="header-button">
              <UploadOutlined /> 上传资源
            </Button>
            <Button 
              className="header-button"
              onClick={() => setIsManaging(!isManaging)}
            >
              <SettingOutlined /> {isManaging ? '完成' : '管理资源'}
            </Button>
          </div>

          <List className="resource-list">
            {resources.map(item => (
              <List.Item
                key={item.id}
                description={item.date}
                extra={
                  isManaging ? (
                    <div className="resource-actions">
                      {item.type === '文档' && (
                        <Button
                          size='small'
                          onClick={(e) => {
                            e.stopPropagation()
                            handleEdit(item)
                          }}
                        >
                          编辑
                        </Button>
                      )}
                      <Button
                        size='small'
                        color='danger'
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(item.id)
                        }}
                      >
                        删除
                      </Button>
                    </div>
                  ) : (
                    item.type
                  )
                }
                onClick={() => !isManaging && setSelectedResource(item)}
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
        </>
      )}
    </div>
  )
}

export default Resource