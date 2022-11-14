import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

import '../../styles/css/index.scss';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
					<img className="logo" src="/images/logo.png" alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 'auto',
              display: { md: 'flex' },
              fontFamily: 'ProximaNova, monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
							textTransform: 'uppercase',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
						Polar
          </Typography>
          <Button className="header-button" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
