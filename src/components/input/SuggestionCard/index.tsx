import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import ButtonSuggestionCard from '../ButtonSuggestionCard';
import { Movie } from '../../../types/movie';
import { getRecommendedMovie } from '../../../services/lib/methods';
import { RecommendedMovieProps } from '../../../types/recommendedMovieProps';

interface ISuggestionCardProps {
  image?: string,
}

const api = {
  id: 0,
  name: "Netflix",
  movies: [] as Movie[],
}

interface Storage {
  data: Movie,
  platformId: number,
}

const SuggestionCard: React.FC<ISuggestionCardProps> = ({ image }) => {

  const storage: Storage = JSON.parse(localStorage.getItem('suggestion') || '{}');
  const { data, platformId } = storage;
  const [id, setId] = useState(platformId);

  let movieProps = {
    idPlatform: id,
    idVideo: data.id,
    genresId: data.genres.map(e => e.id).join(),
  } as RecommendedMovieProps

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      setId(state => (state + 1) % 3)

      getRecommendedMovie(movieProps).then((response) => {
        api.movies.push(response);
        // console.log(response);
      });
    }
  }, [])

  return (
    <Paper
      sx={{
        backgroundImage: `
          linear-gradient(
            90deg, rgba(0,0,0,1) 3%, 
            rgba(0,0,0,1) 15%,
            rgba(0,0,0,0) 100%
            ), 
            url(${data.imageUrl}
          )
        `,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: '',
        width: '100%',
        height: '250px',
        borderRadius: '6px',
        '&::before': {
          content: '""',
          backdropFilter: 'blur(15px)',
          height: '250px',
          position: 'absolute',
          width: '100%',
          maxWidth: '1408px',
          borderRadius: '6px',
        },
      }}
    >
      <Grid
        container
        position="absolute"
        sx={{
          width: '100%',
          maxWidth: '1408px',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <div style={{ marginLeft: '52px' }}>
            <Typography variant="h4" component="h4">Porque você assistiu</Typography>
            <Typography variant="h3" gutterBottom component="h3" noWrap>
              <b>{data.title}</b>
            </Typography>

            <Grid item display="inline-flex">
              <Rating
                name="text-feedback"
                value={data.voteAverage / 2}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon color="secondary" sx={{ opacity: 0.2 }} />
                }
              />
              <Box sx={{ ml: 2 }}>({data.voteAverage})</Box>
            </Grid>
          </div>

        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '40px'
          }}>
            <Grid container
              spacing={2}
              sx={{
                display: 'flex',
                maxWidth: '86%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              {api.movies.map((item, index) => (
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center" key={index}>
                  <ButtonSuggestionCard
                    image={item.imageUrl}
                    platformType={api.id}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SuggestionCard;