import React from 'react';
import { useHistory } from 'react-router';
import './index.less';

/**
 * 首页
 */
function Home() {
  let countdown = 9919;
  let days = [...countdown.toString()];
  let history = useHistory();
  return (
    <div className="home">
      <div className="wrap header">
        <div className="fl" onClick={() => history.push('/greenHands')}>
          <span className="header_text header_text-one">考研倒计时</span>
          {days.map(item => {
            return (
              <span className="header_time" key={item}>
                {item}
              </span>
            );
          })}
          <span className="header_text header_text-last">时</span>
          <img src={require('../../assets/icons/enter.png').default} alt="" className="enter_icon" />
        </div>
        <div className="fr signIn" onClick={() => history.push('/signIn')}>
          签到有礼
        </div>
      </div>
      <div className="wrap">warp 这是</div>
      <div className="wrap">warp 这是</div>
      <div className="wrap">warp 这是</div>
      <div className="wrap">warp 这是</div>
    </div>
  );
}
export default Home;
