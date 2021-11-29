import React from 'react';
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

const Home: React.FC = () => (
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
        {menuItems.map(item => (
          <ListItem button key={item.key}
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

        {[...Array(3)].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ButtonCard />
          </Grid>
        ))}

        {[...Array(4)].map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <ButtonCard />
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

export default Home;