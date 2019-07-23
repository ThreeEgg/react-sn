import React,{Component} from 'react';
import { Enjoy,Category,List,Cart,Mine } from "./components/pages"
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"

class App extends Component{
  renderNavs(){
    let {navs} = this.props;
    return (
      <Switch>
        {
          navs.map(item=>{
            return (
              <Route path={item.path} component={item.component} exact={item.exact} key={item.id}/>
            )
          })
        }
        <Redirect to="/enjoy"></Redirect>
      </Switch>
    )
  }
  render(){
    return (
      <div>
        {this.renderNavs()}
        <AppFooter></AppFooter>
      </div>
    )
  }
}

App.defaultProps = {
  navs:[
    {id:1,title:"首页",path:"/enjoy",component:Enjoy,exact:false},
    {id:2,title:"分类页",path:"/category",component:Category,exact:false},
    {id:3,title:"列表页",path:"/list",component:List,exact:false},
    {id:4,title:"购物车",path:"/cart",component:Cart,exact:false},
    {id:5,title:"我的",path:"/mine",component:Mine,exact:false}
  ]
}
export default withRouter(App);
