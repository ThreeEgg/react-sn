import React,{Component} from "react";
import "./index.scss";
import {withRouter} from "react-router-dom"
import Swiper from "swiper"
class Banner extends Component{
    constructor(){
        super()
        this.state = {
            banners:[
                {id:1,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_1.jpg"},
                {id:2,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_2.jpg"},
                {id:3,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_3.jpg"},
                {id:4,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_4.jpg"},
                {id:5,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_5.jpg"},
                {id:6,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_6.jpg"},
                {id:7,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_7.jpg"},
                {id:8,images:"https://www.forgettime.cn/vue-pro/images/swiper/swiper_8.jpg"}
                ] 
        }
    }
    componentDidMount(){
        new Swiper(".home-banner",{
            loop:true,
            autoplay:true,
            pagination:{
                el:".swiper-pagination"
            }
        })
    }
    renderSwiper(){
        let {banners} = this.state;
        return banners.map(item=>{
            return(
                <div className="swiper-slide" key = {item.id}>
                    <img src={item.images} alt=""/>
                </div>
            )
        }) 
    }
    render(){
        return (
            <div className="swiper-container home-banner">
                <div className="swiper-wrapper">
                    {this.renderSwiper()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default withRouter(Banner);