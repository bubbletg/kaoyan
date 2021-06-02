import React from 'react';
import { useHistory } from 'react-router';
/**
 * 启动页
 */
export default function Activate() {
  console.log('zhe这是启动夜');
  let History = useHistory();
  // 跳转至首页
  setTimeout(() => {
    History.push('/home');
  }, 3000);
  return <div>这是启动夜</div>;
}
