import React, { useState } from 'react';
import { AppBar, Box, Drawer, Grid, List, ListItem, Toolbar, IconButton } from '@mui/material';

import Search from '@mui/icons-material/Search';
import Tv from '@mui/icons-material/Tv';
import Apps from '@mui/icons-material/GridViewRounded';
import World from '@mui/icons-material/TravelExplore';
import Timeline from '@mui/icons-material/Timeline';
import Record from '@mui/icons-material/RadioButtonChecked';
import Settings from '@mui/icons-material/Settings';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import ButtonCard from '../../components/input/ButtonCard';
import SuggestionCard from '../../components/input/SuggestionCard';

import netflix from '../../assets/images/streamers/netflix.png';
import globoplay from '../../assets/images/streamers/globoplay.png';
import primeVideo from '../../assets/images/streamers/prime_video.png';
import { getMovies } from '../../services/lib/methods';
import { StreamingPlatform } from '../../types/streamingPlatform';

const drawerWidth = 80;

const menuItems = [
  {
    key: 1,
    icon: <Search />,
  },
  {
    key: 2,
    icon: <Tv />,
  },
  {
    key: 3,
    icon: <Apps />,
  },
  {
    key: 4,
    icon: <World />,
  },
  {
    key: 5,
    icon: <Timeline />,
  },
  {
    key: 6,
    icon: <Record />,
  },
  {
    key: 7,
    icon: <Settings />,
  }
]

const secondGalleryImages = [
  {
    key: 1,
    image: primeVideo,
  },
  {
    key: 2,
    image: primeVideo,
  },
  {
    key: 3,
    image: primeVideo,
  },
  {
    key: 4,
    image: primeVideo,
  },
]

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<StreamingPlatform[]>([]);

  getMovies().then(response => {
    setApiData(response)
  })

  const firstGalleryImages = [
    {
      key: 1,
      image: netflix,
      data: apiData[0],
    },
    {
      key: 2,
      image: primeVideo,
      data: apiData[1],
    },
    {
      key: 3,
      image: globoplay,
      data: apiData[2],
    },
  ]

  return (
    <Box display="flex">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'transparent',
          marginTop: 2,
        }}
      >
        <Toolbar sx={{ marginLeft: { md: '2%', lg: '3%' } }}>
          <Logo />
        </Toolbar>
      </AppBar>
      <Drawer
        elevation={0}
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            background: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: { md: '2%', lg: '3%' },
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}
              sx={{ borderLeft: item.key === 3 ? '3px solid red' : 'none' }}
            >
              <IconButton color={item.key === 3 ? "inherit" : "secondary"} size="large">
                {item.icon}
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box width="100%" height="100vh" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'auto',
        marginTop: { xs: '64px', md: '20px' },
        // overflowY: 'hidden'
      }}>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SuggestionCard />
          </Grid>

          {firstGalleryImages.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ButtonCard image={item.image} data={item.data} />
            </Grid>
          ))}

          {secondGalleryImages.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <ButtonCard image={item.image} data={apiData[1]} />
            </Grid>
          ))}

          {/* {[...Array(6)].map((item, index) => (
            <Grid item xs={12} md={2} key={index}>
              <ButtonCard />
            </Grid>
          ))} */}

        </Grid>
      </Box>
    </Box>
  )
}

export default Home;