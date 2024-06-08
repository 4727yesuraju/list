import * as React from 'react';
import Button from '@mui/material/Button';

export default function LimitBar({limit,setLimit}) {
  return (
     <div style={{width:"100vw",textAlign:"center"}}>
         <Button variant="contained" disableElevation onClick={()=>setLimit(limit+5)}>
            Load more
          </Button>
     </div>
  );
}