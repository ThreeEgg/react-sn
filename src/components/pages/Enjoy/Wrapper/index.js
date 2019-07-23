import React,{Component} from "react";
import "./index.scss";

class Wrapper extends Component{
    constructor(){
        super();
        this.state={
            menus: [
                {id:1,title:"爆款手机",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_1.webp"},
                {id:2,title:"苏宁超市",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_2.webp"},
                {id:3,title:"生活家电",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_3.webp"},
                {id:4,title:"苏宁生鲜",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_4.webp"},
                {id:5,title:"母婴玩具",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_5.webp"},
                {id:6,title:"限时抢购",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_6.webp"},
                {id:7,title:"赚钱",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_7.webp"},
                {id:8,title:"苏宁拼购",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_8.webp"},
                {id:9,title:"苏宁家电",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_9.webp"},
                {id:10,title:"签到有礼",images:"https://www.forgettime.cn/vue-pro/images/menu/menu_10.webp"}
                ]
        }
    }
    renderMenus=()=>{
        let {menus} = this.state;
        return (
            <ul className="menus">
                {
                    menus.map(item=>{
                        return(
                            <li className = "item" key={item.id}>
                                <div className="pic">
                                    <img src={item.images} alt=""/>
                                </div>
                                <div className="title">
                                    <span>{item.title}</span>
                                </div>
                            </li>
                        )
                    })         
                }
            </ul>
        )
    }
    render(){
        return (
            <div className="wrapper">
                {this.renderMenus()}
            </div>
        )
    }
}

export default Wrapper;