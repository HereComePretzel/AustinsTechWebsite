import React from 'react'
import { Grid } from 'semantic-ui-react'
import download from '../images/download.jpeg'
import BeBlog from '../blogs/BeBlog'
import BiBlog from '../blogs/BiBlog'
import BreatheBlog from '../blogs/BreatheBlog'
import DriveBlog from '../blogs/DriveBlog'
import FailBlog from '../blogs/FailBlog'
import OBlog from '../blogs/OBlog'
import SoftyBlog from '../blogs/SoftyBlog'
import TeamBlog from '../blogs/TeamBlog'


function Blogs() {
    return(
    <Grid>
        <Grid.Row className='grid row'>
            <Grid.Column width={3}>
                <BeBlog />
            </Grid.Column>
            <Grid.Column width={3}>
                <BiBlog />
            </Grid.Column>
            <Grid.Column width={3}>
                <BreatheBlog />
            </Grid.Column >
            <Grid.Column width={3}>
                <DriveBlog />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={3}>
                <FailBlog />
            </Grid.Column>
            <Grid.Column width={3}>
                <OBlog />
            </Grid.Column>
            <Grid.Column width={3}>
                <TeamBlog />
            </Grid.Column >
            <Grid.Column width={3}>
                <SoftyBlog />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}

export default Blogs