import React from 'react'
import download from '../images/download.jpeg'

function LittleChicagoLibraryCard() {
    return (
            <div class="ui card">
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">Little Chicago Library</div>
                            <div class="meta">
                                <span class="date">
                                    Read a book!
                                </span>
                            </div>
                                <div class="description">
                                    <button><a href='https://github.com/charliepatronr/little-chicago-library'>Github</a></button><br/>
                                    <button><a href='https://youtu.be/nCTYq2pL7Sw'>Video Demo</a></button>
                                </div>
                    </div>

            </div>
    )
}

export default LittleChicagoLibraryCard