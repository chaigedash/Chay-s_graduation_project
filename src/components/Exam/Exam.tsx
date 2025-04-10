import { Button, List } from 'antd-mobile'
import { EditOutlined, SwapOutlined } from '@ant-design/icons'
import './Exam.css'
import { useState } from 'react'
import CreatePaper from './CreatePaper'

const Exam = () => {
  const [showCreate, setShowCreate] = useState(false)

  const exams = [
    {
      id: 1,
      title: '低空旅游基础知识测试',
      difficulty: '简单',
      date: '2024-01-20'
    },
    {
      id: 2,
      title: '通用航空产业发展分析',
      difficulty: '中等',
      date: '2024-01-18'
    },
    {
      id: 3,
      title: '低空经济政策法规考核',
      difficulty: '困难',
      date: '2024-01-15'
    },
    {
      id: 4,
      title: '航空旅游规划实务测试',
      difficulty: '中等',
      date: '2024-01-12'
    },
    {
      id: 5,
      title: '低空产业链综合评估',
      difficulty: '困难',
      date: '2024-01-10'
    }
  ]

  if (showCreate) {
    return <CreatePaper onFinish={() => setShowCreate(false)} />
  }

  return (
    <div className="exam-container">
      <div className="exam-header">
        <Button className="header-button" onClick={() => setShowCreate(true)}>
          <EditOutlined /> 创作试卷
        </Button>
        <Button className="header-button">
          <SwapOutlined /> 随机试卷
        </Button>
      </div>

      <List className="exam-list">
        {exams.map(item => (
          <List.Item
            key={item.id}
            description={item.date}
            extra={item.difficulty}
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

export default Exam