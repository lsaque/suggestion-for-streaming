import React from 'react';
import { Card, Box, Avatar, Stack, Typography, Chip } from '@mui/material';


interface Movie {
  url: string;
  title: string;
  description: string;
  category: [];
}

const MoviesList: React.FC = () => {

  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar variant="rounded" src="https://www.007.com/wp-content/uploads/2020/09/BOND-Watermarked-Gallery-Portrait_0007_1%EF%BF%BD-Optimised_1296x1920_blk_whtTT_NTTD_DC.jpg" alt="007" />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>007 Sem tempo para Morrer</Typography >
          <Typography >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quos nulla dolorem sint at iusto. Dolore cum eligendi explicabo esse dolores...
          </Typography >
          <Stack
            direction="row"
            spacing={1}
          >
            <Chip label="Ação"/>
            <Chip label="Aventura"/>
          </Stack>
        </Stack>
      </Box>
    </Card>
  )
}

export default MoviesList;