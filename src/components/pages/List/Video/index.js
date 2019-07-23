import React,{Component} from "react";
import "./index.scss";
import { Player } from 'video-react';

class Video extends Component{
    render(){
        return (
            <div>
                <Player ref="player" videoId="video-1">
                    <source src="https://www.forgettime.cn/demo/images/larva.mp4"/>
                </Player>
            </div>
        )
    }
}

export default Video;