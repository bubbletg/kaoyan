import Activate from "./views/activate";
import Home from "./views/home";


const tabs = ['home','course','news','mine'];

const router = [
  {
    path:'/',
    exact:true,
    render(props){
      return <Activate></Activate>
    }    
  },{
    path:'/home',
    exact:true,
    render(props){
      return <Home></Home>
    }
  }
]

export {
  tabs,
  router
}