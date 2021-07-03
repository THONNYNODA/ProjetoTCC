import React from 'react';
import { Grid } from '@material-ui/core/';


import Header from '../../components/header';



function painel() {
  return(
      <div>
          <Grid container>
              <Grid item xs={12}>
                <Header/>
              </Grid>                                        
          </Grid>
      </div>
  );
}

export default painel;