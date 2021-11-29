import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import Globoplay from '../../../assets/images/streamers/globoplay.png';
import SuggestionModal from '../../feedback/SuggestionModal';

interface IButtonCardProps {
  image?: string,
}

const ButtonCard: React.FC<IButtonCardProps> = ({ image }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSuggestionSubmit = () => {
    setModalOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        onClick={() => setModalOpen(true)}
        sx={{
          width: '100%',
          background: 'black',
          height: '250px',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Globoplay})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            margin: 6,
          }}
        />
      </Button>

      <SuggestionModal
        isOpenModal={isModalOpen}
        handleModalClose={() => handleSuggestionSubmit()}
      />

    </React.Fragment>
  );
}

export default ButtonCard;