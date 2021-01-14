import React from 'react'
import download from '../images/download.jpeg'
import { Button } from 'semantic-ui-react'

function LittleChicagoLibraryCard() {
    return (
            <div class="ui card" style={{textAlign: 'center'}}>
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
                                    <a href='https://github.com/charliepatronr/little-chicago-library'><Button primary>Github</Button></a>
                                    <br></br>
                                    <br></br>
                                    <a href='https://youtu.be/nCTYq2pL7Sw'><Button primary>Video Demo</Button></a>
                                </div>
                    </div>

            </div>
    )
}

export default LittleChicagoLibraryCard