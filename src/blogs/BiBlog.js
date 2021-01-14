import React from 'react'
import download from '../images/download.jpeg'

function BiBlog() {
    return(
<a href='https://austinoie.medium.com/bi-3fe7e171ca79'><div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">.bi</div>
                            <div class="meta">
                                <span class="date">
                                    Diversity included.
                                </span>
                            </div>
                    </div>

            </div></a>
    )
}

export default BiBlog