import { Button, TextArea, Radio, Space } from 'antd-mobile'
import './QuestionStyles.css'

const Judge = () => {
  return (
    <div className="question-editor">
      <div className="editor-header">
        <h3>创建判断题</h3>
      </div>
      
      <div className="editor-content">
        <div className="question-title">
          <TextArea
            placeholder="请输入题目"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </div>

        <div className="judge-options">
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value='true'>正确</Radio>
              <Radio value='false'>错误</Radio>
            </Space>
          </Radio.Group>
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

export default Judge