import React from 'react';
import { useHistory } from 'react-router';

import './index.less';
/**
 * 启动页
 */
export default function Activate() {
  // 启动页显示时间
  let activateTime = 1000;
  let History = useHistory();
  // 跳转至首页
  setTimeout(() => {
    History.push('/home');
  }, activateTime);
  return (
    <div className="activate">
      <img
        src={require('../../assets/icons/启动页.png').default}
        alt=""
        className="logoMax"
      />
      <img
        src={require('../../assets/icons/logo.png').default}
        alt=""
        className="logo"
      />
      <span className="copyright">&copy;小站教育版权所有</span>
    </div>
  );
}
