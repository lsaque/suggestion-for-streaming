import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import MovieCard from '../MovieCard';

interface ISuggestionModalProps {
  isOpenModal: boolean,
  handleModalClose?: React.MouseEventHandler<HTMLButtonElement>,
}

const SuggestionModal: React.FC<ISuggestionModalProps> = ({ isOpenModal, handleModalClose }) => {
  const textLorem = 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.';

  return (
    <Dialog
      open={isOpenModal}
      onClose={handleModalClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">O que você gostaria de assistir?</DialogTitle>
      <DialogContent
       /*
       sx={{
          '.MuiDialogContent-root': {
            borderTop: '4px solid rgba(207, 196, 196, 0.12)',
            borderBottom: '4px solid rgba(207, 196, 196, 0.12)'
          }
        }}
        */
        dividers
      >
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
        >
          <MovieCard
            url="https://br.web.img3.acsta.net/pictures/19/10/05/16/20/4518067.jpg"
            title="007 SEM TEMPO PARA MORRER"
            description="Lorem Ipsum description about the movie pipipi popopo vamo que vamo sei la deu..."
          />
          <MovieCard
            url="https://img.ibxk.com.br/2021/11/17/17150421925381.jpg"
            title="Matrix 4"
            description="Lorem Ipsum description about the movie pipipi popopo vamo que vamo sei la deu..."
          />
          <MovieCard
            url="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"
            title="Sipder-Man No Way Home"
            description="Lorem Ipsum description about the movie pipipi popopo vamo que vamo sei la deu..."
          />
          <MovieCard
            url="https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/10/25/908777613-hawkeye.jpg"
            title="Hawkeye"
            description="Lorem Ipsum description about the movie pipipi popopo vamo que vamo sei la deu..."
          />

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{
          marginBottom: '7px',
          marginRight: '20px',
          fontFamily: 'Poppins'
        }} onClick={handleModalClose} variant="contained">Assistir</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuggestionModal;