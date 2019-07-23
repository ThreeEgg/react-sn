import React,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom"

class AppFooter extends Component{
    renderAppFooter(){
        let {footers} = this.props;
        return (
            footers.map(item=>{
                return (
                    <NavLink 
                        className="item" 
                        key={item.id}
                        exact={item.exact}
                        to={item.path}
                    >
                        <i className={"fa fa-"+(item.icon)}></i>
                        <span>{item.title}</span>
                    </NavLink>
                )
            })
        )
    }
    render(){
        return (
            <div className="app-footer">
                {this.renderAppFooter()}
            </div>
        )
    }
}
AppFooter.defaultProps = {
    footers:[
        {id:1,title:"猜你喜欢",path:"/enjoy",icon:"heart-o",exact:false},
        {id:2,title:"分类",path:"/category",icon:"calendar-minus-o",exact:false},
        {id:3,title:"必抢清单",path:"/list",icon:"list-alt",exact:false},
        {id:4,title:"购物车",path:"/cart",icon:"cart-plus",exact:false},
        {id:5,title:"我的易购",path:"/mine",icon:"user-o",exact:false}
    ]
}

export default AppFooter;