import React from 'react'
import { Grid } from 'semantic-ui-react'
import MBBHCard from '../cards/MBBHCard'
import FlatNoteCard from '../cards/FlatNoteCard'
import MusicLyricSearchCard from '../cards/MusicLyricSearchCard'
import LittleChicagoLibraryCard from '../cards/LittleChicagoLibraryCard'

        
    function GridExampleColumns(){
        return(
          <Grid>
            <Grid.Row className='grid row'>
              <Grid.Column width={8}>
                <MBBHCard />
              </Grid.Column>
              <Grid.Column width={8}>
                <FlatNoteCard />
              </Grid.Column>
            </Grid.Row>
        
            <Grid.Row>
            <Grid.Column width={8}>
                <LittleChicagoLibraryCard />
              </Grid.Column>
            <Grid.Column width={8}>
                <MusicLyricSearchCard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
}
        
        export default GridExampleColumns