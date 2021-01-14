import React from 'react'
import download from '../images/download.jpeg'
import { Button } from 'semantic-ui-react'

function FlatNoteCard() {
    return (
            <div class="ui card" style={{textAlign:'center'}}>
                <div class="image">
                    <img src={download}/>
                </div>
                    <div class="content">
                        <div class="header">FlatNote</div>
                            <div class="meta">
                                <span class="date">
                                    A Todo List Maker
                                </span>
                            </div>
                                <div class="description">
                                    <a href='https://github.com/HereComePretzel/FlatNoteFE'><Button primary>Github FE</Button></a><br></br><br></br>
                                    <a href='https://github.com/HereComePretzel/FlatNoteBE'><Button primary>Github BE</Button></a><br></br><br></br>
                                    <a href='https://youtu.be/6wQ0sdCGp_A'><Button primary>Video Demo</Button></a>
                                </div>
                    </div>

            </div>
    )
}

export default FlatNoteCard