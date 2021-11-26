import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

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
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(() => textLorem)
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} variant="contained">Assistir</Button>
        </DialogActions>
      </Dialog>
  );
}

export default SuggestionModal;