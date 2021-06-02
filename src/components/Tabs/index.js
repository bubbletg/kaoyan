import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
/**
 * 底部 Tab 组件
 */
export default function Tabs(props) {
  let history = useHistory();
  let tab_icons = [
    {
      id: 0,
      title: '首页',
      img: require('../../assets/icons/icon_home.png').default,
      imgfocus: require('../../assets/icons/icon_home_focus.png').default,
      to: '/home'
    },

    {
      id: 1,
      title: '课程',
      img: require('../../assets/icons/icon_course.png').default,
      imgfocus: require('../../assets/icons/icon_course_focus.png').default,
      to: '/course'
    },
    {
      id: 2,
      title: '经验',
      img: require('../../assets/icons/icon_news.png').default,
      imgfocus: require('../../assets/icons/icon_news_focus.png').default,
      to: '/news'
    },
    {
      id: 3,
      title: '我的',
      img: require('../../assets/icons/icon_mine.png').default,
      imgfocus: require('../../assets/icons/icon_mine_focus.png').default,
      to: '/mine'
    }
  ];
  return (
    <div className="footer_tab">
      <ul>
        {tab_icons.map(icon => {
          return (
            <li
              className="footer_tab_item"
              key={icon.id}
              onClick={() => {
                history.push(icon.to);
              }}
            >
              {props.pathname !== icon.to ? (
                <img src={icon.img} alt={icon.title} />
              ) : (
                <img src={icon.imgfocus} alt={icon.title} />
              )}
              <span
                className={
                  props.pathname === icon.to ? 'footer_tab_item-active' : ''
                }
              >
                {icon.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
