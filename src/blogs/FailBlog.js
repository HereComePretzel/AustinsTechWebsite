import React from 'react'
import download from '../images/download.jpeg'

function FailBlog() {
    return(
<a href='https://austinoie.medium.com/fail-5e875e93429d'><div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">.fail</div>
                            <div class="meta">
                                <span class="date">
                                    Failing gracefully
                                </span>
                            </div>
                    </div>

            </div></a>
    )
}

export default FailBlog