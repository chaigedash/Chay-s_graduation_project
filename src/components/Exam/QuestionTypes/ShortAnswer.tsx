import { Button, TextArea, Space } from 'antd-mobile'
import './QuestionStyles.css'

const ShortAnswer = () => {
  return (
    <div className="question-editor">
      <div className="editor-header">
        <h3>创建简答题</h3>
      </div>
      
      <div className="editor-content">
        <div className="question-title">
          <TextArea
            placeholder="请输入题目"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </div>

        <div className="answer-area">
          <TextArea
            placeholder="请输入参考答案"
            autoSize={{ minRows: 4, maxRows: 8 }}
          />
        </div>
      </div>

      <div className="editor-footer">
        <Space>
          <Button>取消</Button>
          <Button color='primary'>保存</Button>
        </Space>
      </div>
    </div>
  )
}

export default ShortAnswer