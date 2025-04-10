import { Button, TextArea, Input, Checkbox, Space } from 'antd-mobile'
import { useState } from 'react'
import './QuestionStyles.css'

const MultipleChoice = () => {
  const [options, setOptions] = useState(['', '', '', ''])

  return (
    <div className="question-editor">
      <div className="editor-header">
        <h3>创建多选题</h3>
      </div>
      
      <div className="editor-content">
        <div className="question-title">
          <TextArea
            placeholder="请输入题目"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </div>

        <div className="options-container">
          {options.map((option, index) => (
            <div key={index} className="option-item">
              <Checkbox value={index} />
              <Input
                placeholder={`选项 ${index + 1}`}
                value={option}
                onChange={val => {
                  const newOptions = [...options]
                  newOptions[index] = val
                  setOptions(newOptions)
                }}
              />
            </div>
          ))}
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

export default MultipleChoice