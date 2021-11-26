import React from 'react';
import { AppBar, SvgIcon, Box, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
import Tv from '@mui/icons-material/Tv';
import Apps from '@mui/icons-material/GridViewRounded';
import World from '@mui/icons-material/TravelExplore';
import Timeline from '@mui/icons-material/Timeline';
import Record from '@mui/icons-material/RadioButtonChecked';
import Settings from '@mui/icons-material/Settings';


import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import ButtonCard from '../../components/input/ButtonCard';

const drawerWidth = 80;
const text = "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper  eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim  neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra  tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis  sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi  tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit  gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem  et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis  tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis  eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla  posuere sollicitudin aliquam ultrices sagittis orci a.";

const menuItems = 
[{
  key: 1,
  icon: <Search/>,
},
{
  key: 2,
  icon: <Tv/>,
},
{
  key: 3,
  icon: <Apps/>,
},
{
  key: 4,
  icon: <World/>,
},
{
  key: 5,
  icon:<Timeline/>,
},
{
  key: 6,
  icon: <Record/>,
},
{
  key: 7,
  icon: <Settings/>,
}]

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
            <IconButton color={ item.key === 3 ? "inherit" : "secondary" } size="large">
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
      marginTop: { xs: '64px', md: '20px' }
    }}>

      <Grid container spacing={2}>
        {[...Array(3)].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ButtonCard/>
          </Grid>
        ))}

        {[...Array(4)].map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <ButtonCard/>
          </Grid>
        ))}

        {[...Array(6)].map((item, index) => (
          <Grid item xs={12} md={2} key={index}>
            <ButtonCard/>
          </Grid>
        ))}

      </Grid>
    </Box>
  </Box>
)

export default Home;