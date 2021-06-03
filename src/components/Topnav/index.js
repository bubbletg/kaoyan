import * as React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 *  顶部导航
 * @param { Object } props  
 * {
 * close :  关闭按钮 ，
 * title : 标题，
 * collect : 收藏 ，true ，已收藏，false 未收藏，
 * share : 分享
 * } 
 * @returns
 */
export default function Topnav(props) {
  let btnClick = function (e) {
    switch (e.target.id) {
      case 'collect':
        break;
      default:
        break;
    }
  };
  return (
    <div className="topnav" onClick={btnClick}>
      <img
        src={
          props.close
            ? require('../../assets/icons/common_icon_close.png').default
            : require('../../assets/icons/common_icon_back.png').default
        }
        alt=""
        className="fl"
      />
      {
        // 标题
        props.title ? <span>{props.title}</span> : null
      }
      {
        // 分享
        props.share ? (
          <img
            src={require('../../assets/icons/icon_share.png').default}
            alt=""
            id="collect"
            className="fr"
            style={{ marginLeft: '20px' }}
          />
        ) : null
      }
      {
        // 收藏
        props.collect ? (
          <img
            src={
              require('../../assets/icons/icon_collection_select.png').default
            }
            alt=""
            id="collect"
            className="fr"
          />
        ) : props.collect != null ? (
          <img
            src={
              require('../../assets/icons/icon_collection_normal.png').default
            }
            alt=""
            id="collect"
            className="fr"
          />
        ) : null
      }
    </div>
  );
}

Topnav.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string,
  collect: PropTypes.bool,
  share: PropTypes.bool
};
