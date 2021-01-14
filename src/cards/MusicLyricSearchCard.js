import React from 'react'
import download from '../images/download.jpeg'
import { Button } from 'semantic-ui-react'

function MusicLyricSearchCard() {
    return (
            <div class="ui card" style={{textAlign: 'center'}}>
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">MusicLyricSearch</div>
                            <div class="meta">
                                <span class="date">
                                    Unsticking the stickiest of songs
                                </span>
                            </div>
                                <div class="description">
                                    <a href='https://github.com/HereComePretzel/MusicLyricSearch'><Button primary>Github</Button></a><br/>
                                </div>
                    </div>

            </div>
    )
}

export default MusicLyricSearchCard