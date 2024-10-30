import React, { createContext} from "react";
import { CssBaseline, Box, Toolbar } from '@mui/material';
import NavBar from "./NavBar";
import SidebarQ from "./SidebarQ";


export const Context = createContext("unknown");

function LayoutQ(props) {

  return (
    <>
    <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        <SidebarQ />
        
        <Box
          component="main"
          sx={{
            width: '100%', mb: 2,
            flexGrow: 1,
            p: 3,
            // ml: { sm: '240px' }, // Margin to the left when the sidebar is present
            mt: '64px', // Margin from the top for the navbar
            overflowX: 'auto', // Allow horizontal scrolling for the content
            minWidth: 0, // Prevent content from expanding beyond the viewport
          }}
        >
          
        {props.children}

        </Box>
      </Box>
    </>
  );
}

export default LayoutQ;
