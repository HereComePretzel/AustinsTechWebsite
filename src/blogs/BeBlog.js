import React from 'react'
import download from '../images/download.jpeg'

function BeBlog() {
    return(
<a href='https://austinoie.medium.com/be-7e514d3dfcd5'><div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">.be</div>
                            <div class="meta">
                                <span class="date">
                                    How to live...
                                </span>
                            </div>
                    </div>

            </div></a>
    )
}

export default BeBlog