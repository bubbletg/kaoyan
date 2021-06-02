import Activate from './views/activate';
import Home from './views/home';
import Course from './views/course';
import News from './views/news';
import Mine from './views/mine';

const tabs = ['home', 'course', 'news', 'mine'];

const router = [
  {
    path: '/',
    exact: true,
    render(props) {
      return <Activate></Activate>;
    }
  },
  {
    path: '/home',
    exact: true,
    render(props) {
      return <Home></Home>;
    }
  },
  {
    path: '/course',
    exact: true,
    render(props) {
      return <Course></Course>;
    }
  },
  {
    path: '/news',
    exact: true,
    render(props) {
      return <News></News>;
    }
  },
  {
    path: '/mine',
    exact: true,
    render(props) {
      return <Mine></Mine>;
    }
  }
];

export { tabs, router };
