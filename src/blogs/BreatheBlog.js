import React from 'react'
import download from '../images/download.jpeg'

function BreatheBlog() {
    return(
<a href='https://austinoie.medium.com/breathe-225bdc553db7'><div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">.breathe</div>
                            <div class="meta">
                                <span class="date">
                                    Stress and anxiety
                                </span>
                            </div>
                    </div>

            </div></a>
    )
}

export default BreatheBlog