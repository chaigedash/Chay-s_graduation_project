import { useState } from 'react'
import { Radio, Checkbox, TextArea, Button, Toast, Space } from 'antd-mobile'
import ExamResult from './ExamResult'

const TakeExam = ({ onFinish }: { onFinish: () => void }) => {
    const [showResult, setShowResult] = useState(false)

    const questions = [
        {
            id: 1,
            type: 'single',
            title: '低空经济主要涉及的飞行高度范围是？',
            options: ['0-1000米', '1000-3000米', '3000-5000米', '5000米以上'],
            answer: '0-1000米'
        },
        {
            id: 2,
            type: 'multiple',
            title: '以下哪些属于低空旅游的主要形式？',
            options: ['直升机观光', '热气球体验', '滑翔伞运动', '航空摄影'],
            answer: ['直升机观光', '热气球体验', '滑翔伞运动']
        },
        {
            id: 3,
            type: 'judge',
            title: '低空经济的发展需要配套完善的地面服务设施支持。',
            answer: true
        },
        {
            id: 4,
            type: 'fill',
            title: '我国首个低空旅游产业示范区设立于____年，位于____省。',
            answer: ['2019', '海南']
        },
        {
            id: 5,
            type: 'short',
            title: '简述低空经济对区域旅游业发展的积极影响。',
            answer: '参考答案：提升旅游体验、带动相关产业发展、增加就业机会、促进区域经济增长等'
        },
        {
            id: 6,
            type: 'single',
            title: '以下哪项不属于通用航空器？',
            options: ['直升机', '波音737', '轻型运动飞机', '滑翔机'],
            answer: '波音737'
        },
        {
            id: 7,
            type: 'multiple',
            title: '低空旅游发展面临的主要挑战包括？',
            options: ['空域管理限制', '基础设施不足', '人才短缺', '成本高昂'],
            answer: ['空域管理限制', '基础设施不足', '人才短缺', '成本高昂']
        },
        {
            id: 8,
            type: 'judge',
            title: '低空经济的发展只依赖于旅游业。',
            answer: false
        },
        {
            id: 9,
            type: 'fill',
            title: '低空飞行活动必须遵守____和____的相关规定。',
            answer: ['空域管理', '飞行安全']
        },
        {
            id: 10,
            type: 'short',
            title: '分析低空经济对城市发展的战略意义。',
            answer: '参考答案：优化产业结构、提升城市形象、增强区域竞争力、促进创新发展等'
        }
    ]

    const renderQuestion = (question: any) => {
        switch (question.type) {
            case 'single':
                return (
                    <Radio.Group>
                        <Space direction='vertical'>
                            {question.options.map((option: string) => (
                                <Radio key={option} value={option}>{option}</Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                )
            case 'multiple':
                return (
                    <Checkbox.Group>
                        <Space direction='vertical'>
                            {question.options.map((option: string) => (
                                <Checkbox key={option} value={option}>{option}</Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                )
            case 'judge':
                return (
                    <Radio.Group>
                        <Space direction='vertical'>
                            <Radio value={'true'}>正确</Radio>
                            <Radio value={'false'}>错误</Radio>
                        </Space>
                    </Radio.Group>
                )
            case 'fill':
                return (
                    <div className="fill-blanks">
                        {Array.isArray(question.answer) && question.answer.map((_: any, index: number) => (
                            <TextArea
                                key={index}
                                placeholder={`填空 ${index + 1}`}
                                autoSize={{ minRows: 1, maxRows: 1 }}
                            />
                        ))}
                    </div>
                )
            case 'short':
                return (
                    <TextArea
                        placeholder="请输入答案"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                )
        }
    }

    const handleSubmit = () => {
        Toast.show({
            content: '提交成功',
            position: 'center',
        })
        setShowResult(true)
    }

    if (showResult) {
        return <ExamResult onFinish={onFinish} />
    }

    return (
        <div className="take-exam-container">
            <div className="questions-wrapper">
                {questions.map(question => (
                    <div key={question.id} className="question-item">
                        <div className="question-title">
                            {question.id}. {question.title}
                        </div>
                        <div className="question-content">
                            {renderQuestion(question)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="submit-section">
                <Button block color='primary' size='large' onClick={handleSubmit}>
                    提交试卷
                </Button>
            </div>
        </div>
    )
}

export default TakeExam