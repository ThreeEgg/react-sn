import React,{Component} from "react";
import "./index.scss";
import getImages from "../../../../modules/util-getImages"

class Feature extends Component{
    renderFeature = ()=>{
        let {features} = this.props;
        return (
            features.map(feature=>{
                return (
                    <div className="feature-item" key={feature.id}>
                        <p>{feature.title}</p>
                        <p>{feature.desc}</p>
                        <div>
                            <img src={getImages(feature.imgSrc)} alt=""/>
                        </div>
                    </div>
                )
            })
        )
    }
    render(){
        return (
            <div className="feature">
                <h1>
                    <i className="fa fa-chrome"></i>
                    特色专享
                </h1>
                <div className="item-box">
                    {this.renderFeature()}
                </div>
            </div>
        )
    }
}

Feature.defaultProps = {
    features:[
        {id:1,title:"城市专享",desc:"必抢好物",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_1.webp"},
        {id:2,title:"汽车生活",desc:"抢15天使用权",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_2.webp"},
        {id:3,title:"苏宁3C",desc:"定金最高抵1000",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_3.webp"},
        {id:4,title:"二手优品",desc:"低价抢苹果X",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_4.webp"},
        {id:5,title:"以旧换新",desc:"购新更省钱",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_5.webp"},
        {id:6,title:"帮客服务",desc:"到家生活服务",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_6.webp"},
        {id:7,title:"助农扶贫",desc:"流心咸鸭蛋",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_7.webp"},
        {id:8,title:"时尚潮流",desc:"24h热销6178件",imgSrc:"https://www.forgettime.cn/vue-pro/images/menu/list_8.webp"}
    ]
}
export default Feature;