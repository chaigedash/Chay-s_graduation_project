import { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
import './Data.css'

const Data = () => {
  // 模拟数据
  const studyTimeData = {
    dates: ['2024-01-20', '2024-01-21', '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25', '2024-01-26'],
    hours: [2.5, 1.8, 3.2, 2.1, 2.8, 3.5, 2.9]
  }

  const scoreData = {
    weeks: ['第一周', '第二周', '第三周', '第四周'],
    scores: [85, 78, 92, 88]
  }

  const compositionData = [
    { value: 40, name: '文本资源' },
    { value: 35, name: '视频资源' },
    { value: 25, name: '做题' }
  ]

  const studyTimeOption = {
    title: {
      text: '每日学习时长统计'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: studyTimeData.dates
    },
    yAxis: {
      type: 'value',
      name: '小时'
    },
    series: [{
      data: studyTimeData.hours,
      type: 'bar',
      color: '#1677ff'
    }]
  }

  const scoreOption = {
    title: {
      text: '近期做题得分趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: scoreData.weeks
    },
    yAxis: {
      type: 'value',
      name: '分数',
      min: 0,
      max: 100
    },
    series: [{
      data: scoreData.scores,
      type: 'line',
      smooth: true,
      color: '#1677ff'
    }]
  }

  const compositionOption = {
    title: {
      text: '学习内容构成'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      type: 'pie',
      radius: '65%',
      data: compositionData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }

  return (
    <div className="data-container">
      <div className="chart-section">
        <ReactECharts option={studyTimeOption} />
        <p className="chart-description">
          学习时长通过记录用户观看资源时长和做题时长综合计算得出
        </p>
      </div>

      <div className="chart-section">
        <ReactECharts option={scoreOption} />
      </div>

      <div className="chart-section">
        <ReactECharts option={compositionOption} />
      </div>
    </div>
  )
}

export default Data