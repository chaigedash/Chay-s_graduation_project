import { useState } from 'react'
import { Button, SearchBar, Popup, List, Popover } from 'antd-mobile'
import { BarsOutlined, BookOutlined, SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import './ResourceDetail.css'

const ResourceDetail = ({ resource }: { resource: any }) => {
  const [showChapters, setShowChapters] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const chapters = [
    { id: 1, title: '第一章 低空经济概述', isBookmark: false },
    { id: 2, title: '第二章 产业发展现状', isBookmark: false },
    { id: 3, title: '我的书签1', isBookmark: true },
    { id: 4, title: '第三章 未来展望', isBookmark: false },
  ]

  return (
    <div className="resource-detail-container">
      <div className="content-area">
        <div className="resource-content">
          <h1>{resource.title}</h1>
          
          <section className="chapter">
            <h2>第一章 低空经济概述</h2>
            <p>低空经济是指在低空空域（通常指1000米以下）开展的经济活动，包括通用航空、航空旅游、航空运动等多个领域。随着国家空域管理改革
              <Popover
                content={<div className="note-content">UTH (Ultra-low altitude Tourism & Hospitality) 是低空旅游与服务的重要发展方向</div>}
                trigger='click'
                placement='top'
              >
                <span className="annotated-text">UTH<QuestionCircleOutlined className="note-icon" /></span>
              </Popover>
              的深化，低空经济正成为新的经济增长点。
            </p>
            
            <p>低空经济的主要特点：</p>
            <ul>
              <li>高科技含量：涉及航空器制造、导航系统等尖端技术</li>
              <li>高附加值：能带动相关产业链发展</li>
              <li>高成长性：市场潜力巨大，发展空间广阔</li>
            </ul>
          </section>

          <section className="chapter">
            <h2>第二章 产业发展现状</h2>
            <p>目前，我国低空经济已形成以下几个主要发展方向：</p>
            <ul>
              <li>低空旅游：包括直升机观光、热气球体验等</li>
              <li>通用航空：包括航空物流、应急救援等</li>
              <li>航空运动：滑翔伞、轻型运动飞机等</li>
            </ul>
            
            <p>2023年，全国通用航空器数量突破3000架，年飞行小时数超过100万小时，产业规模持续扩大。多个省市已建立低空旅游示范区，推动产业集群发展。</p>
          </section>

          <section className="chapter">
            <h2>第三章 未来展望</h2>
            <p>随着相关政策的完善和技术的进步，低空经济将迎来更大的发展机遇：</p>
            <ul>
              <li>空域管理进一步开放</li>
              <li>基础设施不断完善</li>
              <li>市场需求持续增长</li>
              <li>产业链逐步成熟</li>
            </ul>
            
            <p>预计到2025年，我国低空经济市场规模将突破万亿元，成为推动经济QUALITY的QUALITY高质量增长的重要力量。</p>
          </section>
        </div>
      </div>

      <div className="bottom-toolbar">
        <Button className="toolbar-button" onClick={() => setShowChapters(true)}>
          <BarsOutlined /> 章节
        </Button>
        <Button className="toolbar-button">
          <BookOutlined /> 添加书签
        </Button>
        <Button className="toolbar-button" onClick={() => setShowSearch(true)}>
          <SearchOutlined /> 搜索
        </Button>
      </div>

      <Popup
        visible={showChapters}
        onMaskClick={() => setShowChapters(false)}
        position='left'
        bodyStyle={{ width: '80vw', height: '100vh' }}
      >
        <div className="chapters-popup">
          <div className="popup-header">章节目录</div>
          <List>
            {chapters.map(chapter => (
              <List.Item key={chapter.id}>
                <div className={`chapter-item ${chapter.isBookmark ? 'bookmark' : ''}`}>
                  {chapter.title}
                </div>
              </List.Item>
            ))}
          </List>
        </div>
      </Popup>

      <Popup
        visible={showSearch}
        onMaskClick={() => setShowSearch(false)}
        position='bottom'
        bodyStyle={{ height: '40vh' }}
      >
        <div className="search-popup">
          <SearchBar placeholder='请输入想搜索的内容' />
          <div className="search-results">
            {/* 搜索结果将在这里显示 */}
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default ResourceDetail