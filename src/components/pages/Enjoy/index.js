import React,{Component} from "react";
import "./index.scss";
import SortHead from "./SortHead";
import GroupState from "../../../modules/group";
import Slider from "./Slider";
import BigAd from "./BigAd";
import Feature from "./Feature";
import GoodBox from "./GoodBox";
import Banner from "./Banner";
import Wrapper from "./Wrapper"
import BackTop from "../../commons/BackTop"

class Enjoy extends Component{
    scrollBg = ()=>{
        // let {distanceTop} = this.props;
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.props.recordDistanceTop(sTop);
        // console.log(distanceTop,sTop)
        if(sTop > 20 && !this.SortHead.state.isBg){
            this.SortHead.changeStateIsBg();
        }else if(sTop === 0 && !!this.SortHead.state.isBg){
            this.SortHead.changeStateIsBg();
        }
    }
    componentDidMount(){
        window.addEventListener("scroll",this.scrollBg);
        window.scrollTo(0,this.props.distanceTop);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.scrollBg);
    }
    render(){
        return (
            <div className="enjoy" onScroll={this.scrollBg}>
                <SortHead ref={el=>{this.SortHead=el}}></SortHead>
                <Banner></Banner>
                <Wrapper></Wrapper>
                <Slider></Slider>
                <BigAd imgUrl="https://www.forgettime.cn/vue-pro/images/menu/air.png"></BigAd>
                <Feature></Feature>
                <BigAd imgUrl="https://www.forgettime.cn/vue-pro/images/menu/drinks.png"></BigAd>
                <div className="love">
                    <div>
                        <i className="fa fa-heart"></i>
                        <span>猜你喜欢</span>
                        <i className="fa fa-heartbeat"></i>
                    </div>
                </div>
                <GoodBox></GoodBox>
                <BackTop></BackTop>
                
            </div>
        )
    }
}

export default GroupState(Enjoy,{
    reducer:"enjoy",
    states:["distanceTop"]
});