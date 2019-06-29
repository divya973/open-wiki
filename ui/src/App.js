import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Container, Box } from '@material-ui/core';
import Heading1 from './ux-components/Heading1';
import Heading2 from './ux-components/Heading2';
import Text1 from './ux-components/Text1';
import Text2 from './ux-components/Text2';
import Divder from './ux-components/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Status Log</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="white">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <img src="img/edwisely.png" style={{width:'auto',height:'70px'}}/>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Fab size="small" color="primary" aria-label="Add" >
              <SearchIcon />
            </Fab>
            <IconButton aria-label="Show 17 new notifications" color="primary">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box  maxWidth={1024} margin={'16px auto'}>
        <Container >
          <Heading1>Sorting</Heading1>
          <Text1>Sorting algoritms are used to rearrange a given array or list elements according to a comparison operator on the elements.</Text1>
          <img src="/img/graph.png" style={{width:'1024px'}}></img>
          <div >
            <Box display="flex" flexDirection="row" justifyContent="space-around" >
              <Box width={460} >
                <Heading2>Learning objective</Heading2>
                <Divder/>
                <Text2>To understand concepts about searching and sorting algorithms</Text2>
                
              </Box>
              
              <Box  width={460}>
                <Heading2>Learning outcome</Heading2>
                <Divder/>
                <Text2>Able to write an algorithm for selection sort, Bubble sort, Insertion sort, Quick sort, Merge sort, Heap sort and compare their performance in terms of space and time complexity.</Text2>

              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignContent="center" justifyContent="space-around" >
              <img src="/img/graph1.png"></img>
              <img src="/img/graph2.png"></img>
            </Box>
          </div>
          <div >
            <Box display="flex" flexDirection="row" justifyContent="space-around" >
              <Box width={460} >
                <Heading2>Pre-requisites
                <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}>Assess Prerequisites</Button>
                <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}>+ ADD</Button>
                </Heading2>
                <Divder/>

                <div>
                  <ul style={{color:'#614dc6'}}>
                    <li>
                    Time complexity
                    </li>
                    <li>
                    Space complexity
                    </li>
                    <li>
                    Queues
                    </li>
                    <li>
                    Big O Notation
                    </li>
                    <li>
                    Linear Search
                    </li>
                    <li>
                    Tress
                    </li>
                    <li>
                    Dictionaries
                    </li>
                  </ul>
                </div>
                
                
              </Box>
              
              <Box  width={460}>
                <Heading2>Advanced Topics
                <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}>+ ADD</Button>
                </Heading2>
                <Divder/>
                <div>
                  <ul style={{color:'#614dc6'}}>
                    <li>
                    Convex hulls
                    </li>
                    <li>
                    Non-comparision sorts
                    </li>
                    <li>
                    Stability of sorting algorithms
                    </li>
                   
                  </ul>
                </div>

              </Box>
            </Box>
           
          </div>
          <div >
            <Box display="flex" flexDirection="row" justifyContent="space-around" >
              <Box width={460} >
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
                  <Heading2>Applications</Heading2>
                  <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}> +ADD </Button>
                </Box>
                <Divder/>
                <div>
                  <ul style={{color:'#614dc6'}}>
                    <li>
                    Prim’salgorithm
                    </li>
                    <li>
                    Kruskal’s algorithm

                    </li>
                    <li>
                    Dijkstra’s algorithm
                    </li>
                    <li>
                    Huffmann compression
                    </li>
                    <li>
                    Virtual memory
                    </li>
                    <li>
                    System bus
                    </li>
                    <li>
                    Relational database
                    </li>
                  </ul>
                </div>
              </Box>
              
              <Box  width={460}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
                  <Heading2>Related Topics</Heading2>
                  <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}> +ADD </Button>
                </Box>
                <Divder/>
                <div>
                  <ul style={{color:'#614dc6'}}>
                    <li>
                    Convex hulls
                    </li>
                    <li>
                    Non-comparision sorts
                    </li>
                    <li>
                    Stability of sorting algorithms
                    </li>
                  </ul>
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Button size="small"  variant="outlined" style={{borderBottom:'3px solid #673AB7'}}>Asses</Button>
          </div>
        </Container>
      </Box>
      
    </div>
  );
}
