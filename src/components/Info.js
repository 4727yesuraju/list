
  import * as React from 'react';
  import { styled } from '@mui/material/styles';
  import Grid from '@mui/material/Grid';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import ButtonBase from '@mui/material/ButtonBase';
import { useParams } from 'react-router-dom'
  
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  export default function ComplexGrid({data}) {
    const {id} = useParams();
    const item = data.find(item=>item.id===id);
    return (
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        style={{marginTop:"100px"}}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={item?.url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {item?.breeds[0].name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  group :  {item?.breeds[0].breed_group}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  temperament : {item?.breeds[0].temperament}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  life-span : {item?.breeds[0].life_span}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  