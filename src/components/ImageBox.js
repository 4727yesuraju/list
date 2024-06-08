import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ImageBox({item}) {
    const navigate = useNavigate();
  return (
        <Grid item xs={4} sm={4} md={4} lg={4}>
            <Item onClick={()=> navigate(`/${item.id}`)}>
                <ImageListItem key={"item.img"}>
                  <img
                    srcSet={`${item.url}?w=248&h=300&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.url}?w=248&h=300&fit=crop&auto=format`}
                    alt={item.breeds[0].name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.breeds[0].name}
                    subtitle={item.breeds[0].breed_group}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${"item.title"}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
            </ImageListItem>
            </Item>
          </Grid>
  )
}
