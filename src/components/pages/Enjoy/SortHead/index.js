import React,{Component} from "react";
import "./index.scss";

class SortHead extends Component{
    constructor(){
        super();
        this.state = {
            isBg:false
        }
    }
    changeStateIsBg = ()=>{
        this.setState({
            isBg:!this.state.isBg
        })
    }
    render(){
        return (
            <div className={"sort-head "+(this.state.isBg?"bg":"")}>
                <div className="left">
                    <i className="fa fa-calendar-minus-o"></i>
                    <span>分类</span>
                </div>
                <div className="center">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="这里是三组的搜索框"/>
                </div>
                <div className="right">
                    <span>登录</span>
                </div>
            </div>
        )
    }
}

export default SortHead;