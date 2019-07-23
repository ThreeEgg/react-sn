import React,{Component} from "react";
import "./index.scss";
import GroupState from "../../../../modules/group"
import getImages from "../../../../modules/util-getImages"

class GoodBox extends Component{
    componentDidMount(){
        if(this.props.distanceTop*1 === 0){
            this.props.getGoodInfo(this.props.goodsPage);
            console.log(1)
        }
        
    }
    loadMore = ()=>{
        let {goodsPage} = this.props;
        this.props.getGoodInfo(goodsPage);
    }
    renderGoods = ()=>{
        let {goods} = this.props;
        if(!goods) return false;
        // console.log(goods)
        return (
            goods.map(good=>{
                let title = good.title;
                return (
                    <div className="good-item" key={good.id}>
                        <div className="imgbox">
                            <img src={getImages(good.img)} alt=""/>
                        </div>
                        <p className="name">{good.name}</p>
                        <div>
                            {
                                title.map(item=>{
                                    return (
                                        <span key={item}>{item}</span>
                                    )
                                })
                            }
                            
                        </div>
                        <p className="price">￥<span>{good.price}</span></p>
                        <button className="btn"><i className="fa fa-cart-arrow-down"></i></button>
                    </div>
                )
            })
        )
    }
    render(){
        return (
            <div className="good-box">
                {this.renderGoods()}
                {
                    this.props.hasMore?<h2 className="text" onClick={this.loadMore}>获取更多</h2>
                                        :
                                        <h2 className="text">我到头了</h2>
                }
            </div>
        )
    }
}

export default GroupState(GoodBox,{
    reducer:"enjoy",
    states:["goods","goodsPage","hasMore","distanceTop"]
});