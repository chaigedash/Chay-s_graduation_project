import { Button } from 'antd-mobile'
import './ExamResult.css'

const ExamResult = ({ onFinish }: { onFinish: () => void }) => {
  const results = [
    {
      id: 1,
      type: 'single',
      title: '低空经济主要涉及的飞行高度范围是？',
      userAnswer: '0-1000米',
      correctAnswer: '0-1000米',
      isCorrect: true,
      score: 10
    },
    {
      id: 2,
      type: 'multiple',
      title: '以下哪些属于低空旅游的主要形式？',
      userAnswer: ['直升机观光', '热气球体验', '滑翔伞运动'],
      correctAnswer: ['直升机观光', '热气球体验', '滑翔伞运动'],
      isCorrect: true,
      score: 10
    },
    {
      id: 3,
      type: 'judge',
      title: '低空经济的发展需要配套完善的地面服务设施支持。',
      userAnswer: '正确',
      correctAnswer: '正确',
      isCorrect: true,
      score: 10
    },
    {
      id: 4,
      type: 'fill',
      title: '我国首个低空旅游产业示范区设立于____年，位于____省。',
      userAnswer: ['2019', '海南'],
      correctAnswer: ['2019', '海南'],
      isCorrect: true,
      score: 10
    },
    {
      id: 5,
      type: 'short',
      title: '简述低空经济对区域旅游业发展的积极影响。',
      userAnswer: '提升旅游体验、带动相关产业发展、增加就业机会',
      correctAnswer: '提升旅游体验、带动相关产业发展、增加就业机会、促进区域经济增长等',
      isCorrect: true,
      score: 8
    },
    {
      id: 6,
      type: 'single',
      title: '以下哪项不属于通用航空器？',
      userAnswer: '波音737',
      correctAnswer: '波音737',
      isCorrect: true,
      score: 10
    },
    {
      id: 7,
      type: 'multiple',
      title: '低空旅游发展面临的主要挑战包括？',
      userAnswer: ['空域管理限制', '基础设施不足', '人才短缺'],
      correctAnswer: ['空域管理限制', '基础设施不足', '人才短缺', '成本高昂'],
      isCorrect: false,
      score: 6
    },
    {
      id: 8,
      type: 'judge',
      title: '低空经济的发展只依赖于旅游业。',
      userAnswer: '错误',
      correctAnswer: '错误',
      isCorrect: true,
      score: 10
    },
    {
      id: 9,
      type: 'fill',
      title: '低空飞行活动必须遵守____和____的相关规定。',
      userAnswer: ['空域管理', '安全'],
      correctAnswer: ['空域管理', '飞行安全'],
      isCorrect: false,
      score: 5
    },
    {
      id: 10,
      type: 'short',
      title: '分析低空经济对城市发展的战略意义。',
      userAnswer: '优化产业结构、提升城市形象、增强区域竞争力',
      correctAnswer: '参考答案：优化产业结构、提升城市形象、增强区域竞争力、促进创新发展等',
      isCorrect: false,
      score: 3
    }
  ]

  const totalScore = results.reduce((sum, item) => sum + item.score, 0)
  const passScore = 60

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>试卷评分</h2>
        <div className={`total-score ${totalScore >= passScore ? 'pass' : 'fail'}`}>
          {totalScore} / 100分
        </div>
        <div className="score-comment">
          {totalScore >= passScore ? '恭喜你通过考试！' : '继续加油！'}
        </div>
        <div className="score-detail">
          答对 {results.filter(item => item.isCorrect).length} 题
          / 共 {results.length} 题
        </div>
      </div>

      <div className="result-list">
        {results.map((item, index) => (
          <>{
            
            <div key={item.id} className="result-item">
              <div className="question-header">
                <span className="question-id">{item.id}.</span>
                <span className="question-type">
                  {item.type === 'single' && '单选题'}
                  {item.type === 'multiple' && '多选题'}
                  {item.type === 'judge' && '判断题'}
                  {item.type === 'fill' && '填空题'}
                  {item.type === 'short' && '简答题'}
                </span>
                <span className={`question-score ${item.isCorrect ? 'correct' : 'wrong'}`}>
                  {item.score}分
                </span>
              </div>
              
              <div className="question-title">{item.title}</div>
              
              <div className="answer-section">
                <div className="user-answer">
                  <label>你的答案：</label>
                  <span>{Array.isArray(item.userAnswer) ? item.userAnswer.join('、') : item.userAnswer}</span>
                </div>
                <div className="correct-answer">
                  <label>正确答案：</label>
                  <span>{Array.isArray(item.correctAnswer) ? item.correctAnswer.join('、') : item.correctAnswer}</span>
                </div>
              </div>
            </div>
            }
          </>
        ))}
      </div>

      <div className="result-footer">
        <Button block color='primary' onClick={onFinish}>
          返回试题列表
        </Button>
      </div>
    </div>
  )
}

export default ExamResult