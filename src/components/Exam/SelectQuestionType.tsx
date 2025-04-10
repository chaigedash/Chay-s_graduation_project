import { Button } from 'antd-mobile'
import { useState } from 'react'
import SingleChoice from './QuestionTypes/SingleChoice'
import MultipleChoice from './QuestionTypes/MultipleChoice'
import FillBlank from './QuestionTypes/FillBlank'
import ShortAnswer from './QuestionTypes/ShortAnswer'
import Judge from './QuestionTypes/Judge'
import './SelectQuestionType.css'

const SelectQuestionType = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const questionTypes = [
    { type: 'single', label: '单选题', component: SingleChoice },
    { type: 'multiple', label: '多选题', component: MultipleChoice },
    { type: 'fill', label: '填空题', component: FillBlank },
    { type: 'short', label: '简答题', component: ShortAnswer },
    { type: 'judge', label: '判断题', component: Judge }
  ]

  if (selectedType) {
    const QuestionComponent = questionTypes.find(q => q.type === selectedType)?.component
    return QuestionComponent ? <QuestionComponent /> : null
  }

  return (
    <div className="select-type-container">
      {questionTypes.map(item => (
        <Button 
          key={item.type} 
          className="type-button"
          color='primary'
          block
          onClick={() => setSelectedType(item.type)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}

export default SelectQuestionType