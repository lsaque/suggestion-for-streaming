import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Chip, useTheme } from '@mui/material';

import netflixIcon from '../../../assets/images/streamers/icons/netflix.png';
import primeVideoIcon from '../../../assets/images/streamers/icons/primeVideo.png';
import globoPlayIcon from '../../../assets/images/streamers/icons/globoPlay.png';
import SuggestionModal from '../../feedback/SuggestionModal';

interface IButtonSuggestionCardProps {
  image?: string,
  platformType?: 1 | 2 | 3,
}

const ButtonSuggestionCard: React.FC<IButtonSuggestionCardProps> = ({ image, platformType }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleSuggestionSubmit = () => setModalOpen(false);
  const theme = useTheme();

  const background = 'https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg';
  let platform;
  let label;
  let color;

  switch (platformType) {
    case 1:
      platform = netflixIcon;
      label = 'Netflix';
      color = theme.palette.primary.main;
      break;
    case 2:
      platform = primeVideoIcon;
      label = 'Prime Video';
      color = theme.palette.info.main;
      break;
    case 3:
      platform = globoPlayIcon;
      label = 'Globoplay';
      color = '#fc4626';
      break;

    default:
      break;
  }

  const renderAvatar = <Avatar alt="Netflix" src={platform} />

  return (
    <React.Fragment>
      <Button
        onClick={() => setModalOpen(true)}
        sx={{
          height: '210px',
          width: '170px',
          borderRadius: '10px',
          padding: 0,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '5px',
            boxShadow: '8px 4px 13px rgba(0,0,0,0.38)',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Chip
            avatar={renderAvatar}
            label={label}
            variant="outlined"
            size="small"
            sx={{
              marginTop: '4px',
              paddingLeft: '2px',
              paddingRight: '3px',
              marginLeft: '4px',
              textTransform: 'capitalize',
              border: 'none',
              background: color,
              '.MuiChip-label': {
                marginTop: '2.75px',
              }
            }}
          />
        </Box>
      </Button>

      <SuggestionModal
        isOpenModal={isModalOpen}
        handleModalClose={() => handleSuggestionSubmit()}
      />

    </React.Fragment>
  );
}

export default ButtonSuggestionCard;