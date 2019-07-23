import React,{Component} from "react";
import "./index.scss";
import Swiper from "swiper";
import getImages from "../../../../modules/util-getImages"

class Slider extends Component{
    componentDidMount(){
        new Swiper(".right",{
            direction: 'vertical',
            loop: true,
            autoplay:true,
            //切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
            speed:500
        })
    }
    renderSlider = ()=>{
        let {sliders} = this.props;
        return (
            sliders.map(slider=>{
                return (
                    <div className="swiper-slide"
                        key={slider.id}
                    >   
                        <div className="lf">
                            <div>
                                <p>热门</p>
                                <span>{slider.title[0]}</span>
                            </div>
                            <div>
                                <p>热门</p>
                                <span>{slider.title[1]}</span>
                            </div>
                        </div>
                        <div className="rt">
                            <img src={getImages(slider.images)} alt=""/>
                        </div>
                    </div>
                )
            })
        )
    }
    render(){
        return (
            <div className="slider-box">
                <div className="slider">
                    <div className="left">
                        <img src="https://www.forgettime.cn/vue-pro/images/menu/logo.png" alt=""/>
                    </div>
                    <div className="right swiper-container">
                        <div className="swiper-wrapper">
                            {this.renderSlider()}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Slider.defaultProps = {
    sliders:[
        {id:1,title:["5块钱煮一锅，比燕窝还养人！","宝宝喝水有讲究，各年龄段的该如何补充"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_1.jpg"},
        {id:2,title:["无惧电费贵，智米直流变频风扇让你安心享受","腐竹这么做，香气扑鼻，营养丰富，人人都喜欢"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_2.jpg"},
        {id:3,title:["腐竹这么做，香气扑鼻，营养丰富，人人都喜欢","孩子结束高考即将迈入上大学，父母该怎么挑手机？"],images:"https://www.forgettime.cn/vue-pro/images/menu/sbanner_3.jpg"},
    ]
}

export default Slider;