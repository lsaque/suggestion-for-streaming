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
    <Card>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar variant="rounded" src={url} alt={title} />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{title}</Typography >
          <Typography >{description}</Typography >
          <Stack
            direction="row"
            spacing={1}
          >
            {category?.map(item => {
              <Chip label={item.name} key={item.id} />
            })}
          </Stack>
        </Stack>
      </Box>
    </Card>
  )
}

export default MovieCard;