import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import download from '../images/download.jpeg'

function MBBHCard() {
    return (
            <div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">MyBigBleedingHeart</div>
                            <div class="meta">
                                <span class="date">
                                    A Journey in Mental Health
                                </span>
                            </div>
                                <div class="description">
                                    <button><a href='https://github.com/HereComePretzel/MyBigBleedingHeart'>Github</a></button><br/>
                                    <button><a href='https://youtu.be/yuH26tIChaU'>Video Demo</a></button>
                                </div>
                    </div>

            </div>
    )
}

export default MBBHCard