import React from 'react'
import download from '../images/download.jpeg'

function FlatNoteCard() {
    return (
            <div class="ui card">
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
                                    <button><a href='https://github.com/HereComePretzel/FlatNoteFE'>Github FE</a></button><br/>
                                    <button><a href='https://github.com/HereComePretzel/FlatNoteBE'>Github BE</a></button><br/>
                                    <button><a href='https://youtu.be/6wQ0sdCGp_A'>Video Demo</a></button>
                                </div>
                    </div>

            </div>
    )
}

export default FlatNoteCard