import React from 'react'
import download from '../images/download.jpeg'

function MusicLyricSearchCard() {
    return (
            <div class="ui card">
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
                                    <button><a href='https://github.com/HereComePretzel/MusicLyricSearch'>Github</a></button><br/>
                                </div>
                    </div>

            </div>
    )
}

export default MusicLyricSearchCard