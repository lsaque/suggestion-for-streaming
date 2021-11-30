import React from 'react';
import { Card, Box, Avatar, Stack, Typography, Chip } from '@mui/material';
import { Genre } from '../../../types/genre';

interface IMovieCardProps {
  url: string;
  title: string;
  description: string;
  category?: Genre[];
}

const MovieCard: React.FC<IMovieCardProps> = ({ url, title, description, category }) => {

  return (
    <Card
    sx={{
      marginTop: '20px',
      //border: '1px solid red', 
      background: '#0C0C10',
      borderRadius: '10px'
    }}
    >
      <Box sx={{
        p: 2.5,
        display: 'flex',
        cursor: 'pointer'
      }}>
        <Avatar sx={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: 100,
          height: '100%',
          borderRadius: '5px',
          boxShadow: '8px 4px 13px rgba(0,0,0,0.38)',
          display: 'flex',
          justifyContent: 'flex-start'
        }} variant="rounded" src={url} alt={title} />

        <Stack sx={{
          //backgroundColor: 'red',
          paddingLeft: '30px',
        }} spacing={0.5}>
          <Typography sx={{ fontFamily: 'Poppins' }} variant="h5" component="h5">{title}</Typography >
          <Typography sx={{ fontFamily: 'Poppins', opacity: 0.5 }}>{description}</Typography >
          <Stack
            sx={{
              paddingTop: '20px',
              maxWidth: '100%',
              border: '1px solid red', 
            }}
            direction="row"
            spacing={1}
          >
            {category?.map(item => {
              <Chip  sx={{ fontFamily: 'Poppins' }} label={item.name} key={item.id} />
            })}
            <Chip sx={{ fontFamily: 'Poppins' }} label="Ação" />
            <Chip sx={{ fontFamily: 'Poppins' }} label="Aventura" />
            <Chip sx={{ fontFamily: 'Poppins' }} label="Terror" />
            <Chip sx={{ fontFamily: 'Poppins' }} label="Drama" />

            <Chip sx={{ fontFamily: 'Poppins' }} label="Terror" />
            <Chip sx={{ fontFamily: 'Poppins' }} label="Drama" />
            
            <Chip sx={{ fontFamily: 'Poppins' }} label="+2" />
          </Stack>
        </Stack>
      </Box>
    </Card>
  )
}

export default MovieCard;