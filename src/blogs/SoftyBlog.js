import React from 'react'
import download from '../images/download.jpeg'

function SoftyBlog() {
    return(
<a href='https://austinoie.medium.com/softy-c6330e04d32a'><div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">.softy</div>
                            <div class="meta">
                                <span class="date">
                                    Quantifying soft skills...
                                </span>
                            </div>
                    </div>

            </div></a>
    )
}

export default SoftyBlog
