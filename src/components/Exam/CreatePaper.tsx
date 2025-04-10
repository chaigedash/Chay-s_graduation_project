import { useState } from 'react'
import SelectQuestionType from './SelectQuestionType'
import { Button, List, Tag, Checkbox } from 'antd-mobile'
import { EditOutlined, CheckOutlined } from '@ant-design/icons'
import './CreatePaper.css'

const CreatePaper = ({ onFinish }: { onFinish: () => void }) => {
  const questions = [
    {
      id: 1,
      title: '低空旅游的主要特点包括哪些？',
      type: '多选',
      difficulty: '中等',
      selected: false
    },
    {
      id: 2,
      title: '通用航空是否属于民用航空的范畴？',
      type: '判断',
      difficulty: '简单',
      selected: false
    },
    {
      id: 3,
      title: '简述低空经济对区域发展的影响',
      type: '简答',
      difficulty: '困难',
      selected: false
    },
    {
      id: 4,
      title: '我国低空空域管理改革始于哪一年？',
      type: '填空',
      difficulty: '中等',
      selected: false
    },
    {
      id: 5,
      title: '以下哪个不是通用航空的主要业务？',
      type: '单选',
      difficulty: '简单',
      selected: false
    }
  ]
  const [showSelectType, setShowSelectType] = useState(false)

  if (showSelectType) {
    return <SelectQuestionType />
  }

  return (
    <div className="create-paper-container">
      <div className="paper-header">
        <Button 
          className="header-button" 
          color='primary'
          onClick={() => setShowSelectType(true)}
        >
          <EditOutlined /> 创作试题
        </Button>
        <Button className="header-button" color='primary' onClick={onFinish}>
          <CheckOutlined /> 完成试卷
        </Button>
      </div>

      <List className="question-list">
        {questions.map(item => (
          <List.Item
            key={item.id}
            prefix={<Checkbox />}
            extra={
              <div className="tag-group">
                <Tag color='primary'>{item.type}</Tag>
                <Tag color='default'>{item.difficulty}</Tag>
              </div>
            }
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

export default CreatePaper