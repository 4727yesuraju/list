import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageBox from './ImageBox';
import LimitBar from './LimitBar';



export default function Container({data,limit,setLimit}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:16 }}>
        {data && data.map((item, index) => <ImageBox item={item} key={index} />
         )}
      </Grid>
      <LimitBar limit={limit} setLimit={setLimit}/>
    </Box>
  );
}
