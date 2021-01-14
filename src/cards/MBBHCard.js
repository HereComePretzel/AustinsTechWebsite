import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import download from '../images/download.jpeg'

function MBBHCard() {
    return (
            <div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content" style={{textAlign:'center'}}>
                        <div class="header">MyBigBleedingHeart</div>
                            <div class="meta">
                                <span class="date">
                                    A Journey in Mental Health
                                </span>
                            </div>
                                <div class="description">
                                    <a href='https://github.com/HereComePretzel/MyBigBleedingHeart'><Button primary>Github</Button></a>
                                    <br></br>
                                    <br></br>
                                    <a href='https://youtu.be/yuH26tIChaU'><Button primary>Video Demo</Button></a>
                                </div>
                    </div>

            </div>
    )
}

export default MBBHCard