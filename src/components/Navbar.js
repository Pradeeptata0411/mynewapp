import * as React from 'react'; 
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar'; 
import IconButton from '@mui/material/IconButton'; 
import Typography from '@mui/material/Typography'; 
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu'; 
import Container from '@mui/material/Container'; 
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button'; 
import Tooltip from '@mui/material/Tooltip'; 
import MenuItem from '@mui/material/MenuItem'; 
import KLlogo from'./images/KLlogo.jpg';
import { Link } from 'react-router-dom'; 
const pages = ['CSE','ECE','ME','BT']; 
 
const Navbar = () => { 
  const [anchorElNav, setAnchorElNav] = React.useState(null); 
  const [anchorElUser, setAnchorElUser] = React.useState(null); 
 
  const handleOpenNavMenu = (event) => { 
    setAnchorElNav(event.currentTarget); 
  }; 
  const handleOpenUserMenu = (event) => { 
    setAnchorElUser(event.currentTarget); 
  }; 
 
  const handleCloseNavMenu = () => { 
    setAnchorElNav(null); 
  }; 
 
  const handleCloseUserMenu = () => { 
    setAnchorElUser(null); 
  }; 
 
  return ( 
    
    <AppBar sx={{ background:"green"}}
    position="static"> 
      <Container maxWidth="xl"> 
        <Toolbar disableGutters> 
          <Typography 
            variant="h6" 
            noWrap 
            component="a" 
            href="/" 
            sx={{ 
              mr: 2, 
              display: { xs: 'none', md: 'flex' }, 
              fontFamily: 'monospace', 
              fontWeight: 700, 
              letterSpacing: '.3rem', 
              color: 'red', 
              textDecoration: 'none', 
              height:'50px',
              width:'150px',
            }} 
          > 
            <img src={require('./images/KLlogo.jpg')}/>
           
          </Typography> 
      
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
            <IconButton 
              size="large" 
              aria-label="account of current user" 
              aria-controls="menu-appbar" 
              aria-haspopup="true" 
              onClick={handleOpenNavMenu} 
              color="inherit" 
            > 
              <MenuIcon /> 
            </IconButton> 
            <Menu 
              id="menu-appbar" 
              anchorEl={anchorElNav} 
              anchorOrigin={{ 
                vertical: 'bottom', 
                horizontal: 'left', 
              }} 
              keepMounted 
              transformOrigin={{ 
                vertical: 'top', 
                horizontal: 'left', 
              }} 
              open={Boolean(anchorElNav)} 
              onClose={handleCloseNavMenu} 
              sx={{ 
                display: { xs: 'block', md: 'none' }, 
              }} 
            > 
              {pages.map((page) => ( 
                <MenuItem key={page} onClick={handleCloseNavMenu}> 
                  <Typography textAlign="center"> 
                    <Link style={{textDecoration:'none', color:'white'}} to={`/${page}`}> 
                    {page} 
                    </Link> 
                    </Typography> 
                </MenuItem> 
              ))} 
            </Menu> 
          </Box> 
          
          <Typography 
            variant="h5" 
            noWrap 
            component="a" 
            href="" 
            sx={{ 
              mr: 2, 
              display: { xs: 'flex', md: 'none' }, 
              flexGrow: 1, 
              fontFamily: 'monospace', 
              fontWeight: 700, 
              letterSpacing: '.3rem', 
              color: 'inherit', 
              textDecoration: 'none', 
            }} 
          > 
           LOGO
          </Typography> 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
            {pages.map((page) => ( 
              <Button 
                key={page}onClick={handleCloseNavMenu} 
                sx={{ my: 2, color: 'white', display: 'block' }} 
              ><Link style={{textDecoration:'none', color:'yellow'}} to={`/${page}`}> 
                {page} 
                </Link> 
              </Button> 
            ))} 
          </Box> 
 
         
        </Toolbar> 
      </Container> 
    </AppBar> 
  ); 
}; 
export default Navbar;