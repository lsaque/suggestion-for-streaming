import React from 'react';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import ButtonSuggestionCard from '../ButtonSuggestionCard';

interface ISuggestionCardProps {
  image?: string,
}

const api = {
  id: 0,
  name: "Netflix",
  movies: [
    {
      id: 580489,
      title: "Venom: Let There Be Carnage",
      imageUrl: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      genres: [
        {
          id: 878,
          name: "Ficção Científica"
        },
        {
          id: 28,
          name: "Ação"
        },
        {
          id: 12,
          name: "Aventura"
        }
      ],
      voteAverage: 7.2
    },
    {
      id: 580489,
      title: "Venom: Let There Be Carnage",
      imageUrl: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      genres: [
        {
          id: 878,
          name: "Ficção Científica"
        },
        {
          id: 28,
          name: "Ação"
        },
        {
          id: 12,
          name: "Aventura"
        }
      ],
      voteAverage: 7.2
    },
    {
      id: 580489,
      title: "Venom: Let There Be Carnage",
      imageUrl: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      genres: [
        {
          id: 878,
          name: "Ficção Científica"
        },
        {
          id: 28,
          name: "Ação"
        },
        {
          id: 12,
          name: "Aventura"
        }
      ],
      voteAverage: 7.2
    },
  ]
}

const SuggestionCard: React.FC<ISuggestionCardProps> = ({ image }) => {
  const background = 'https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg';

  return (
    <React.Fragment>
      <Paper
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 3%, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%), url(${background})`,
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
        <Grid container position="absolute" sx={{
          width: '100%',
          maxWidth: '1408px',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Grid item xs={12} md={6} lg={4}>
            <div style={{ marginLeft: '52px' }}>
              <Typography variant="h4" component="h4">Porque voce assistiu</Typography>
              <Typography variant="h3" gutterBottom component="h3" noWrap>
                <b>Pretty Little Liars</b>
              </Typography>

              <Grid item display="inline-flex">
                <Rating
                  name="text-feedback"
                  value={6 / 2}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon color="secondary" sx={{ opacity: 0.2 }} />
                  }
                />
                <Box sx={{ ml: 2 }}>(7.8)</Box>
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
                {api.movies.map(item => (
                  <Grid item xs={3} display="flex" justifyContent="center" alignItems="center" key={item.id}>
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
    </React.Fragment>
  );
}

export default SuggestionCard;