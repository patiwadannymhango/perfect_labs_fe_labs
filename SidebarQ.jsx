import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Divider } from '@mui/material';
import {
  Description,
  Business,
  People,
  PeopleOutline,
  Build,
  Assessment,
  LocalShipping,
  TrendingUp,
  Info,
  Warning,
  Refresh,
  Home,
  Science,
  Summarize // Import the new icon for Audit Summary
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector

const SidebarQ = () => {
  const drawerWidth = 240;

  // Retrieve the necessary values from Redux store
  const showItems = useSelector((state) => state.sidebar.showItems);
  const labProfileId = useSelector((state) => state.sidebar.labProfileId); // Add this line

  // Define your items with tooltips, icons, and corresponding links
  const items = [
    { text: "Audit Summary", tooltip: "Audit Summary Overview", icon: <Summarize />, link: "/slipta_lab_profile" }, // Add Audit Summary item
    { text: "Documents and Records", tooltip: "Documents and Records Questionnaire", icon: <Description />, link: "/slipta_audit_section_1" },
    { text: "Organisation and Leadership", tooltip: "Organisation and Leadership Questionnaire", icon: <Business />, link: "/slipta_audit_section_2" },
    { text: "Personnel Management", tooltip: "Personnel Management Questionnaire", icon: <People />, link: "/slipta_audit_section_3" },
    { text: "Customer Focus", tooltip: "Customer Focus Questionnaire", icon: <PeopleOutline />, link: "/slipta_audit_section_4" },
    { text: "Equipment Management", tooltip: "Equipment Management Questionnaire", icon: <Build />, link: "/slipta_audit_section_5" },
    { text: "Assessment", tooltip: "Assessment Questionnaire", icon: <Assessment />, link: "/slipta_audit_section_6" },
    { text: "Supplier and Inventory Management", tooltip: "Supplier and Inventory Management", icon: <LocalShipping />, link: "/slipta_audit_section_7" },
    { text: "Process Management", tooltip: "Process Management Questionnaire", icon: <TrendingUp />, link: "/slipta_audit_section_8" },
    { text: "Information Management", tooltip: "Information Management Questionnaire", icon: <Info />, link: "/slipta_audit_section_9" },
    { text: "Nonconforming Events", tooltip: "Nonconforming Events Questionnaire", icon: <Warning />, link: "/slipta_audit_section_10" },
    { text: "Continual Improvement", tooltip: "Continual Improvement Questionnaire", icon: <Refresh />, link: "/slipta_audit_section_11" },
    { text: "Facilities and Safety", tooltip: "Facilities and Safety Questionnaire", icon: <Home />, link: "/slipta_audit_section_12" },
   
  ];

  // Helper function to append labProfileId to the link if it's set
  const appendLabProfileId = (link) => {
    return labProfileId ? `${link}/${labProfileId}/` : link;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List sx={{ mt: '110px' }}>
        {/* Laboratory Profile item at the top */}
        <ListItem component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon>
            <Science />
          </ListItemIcon>
          <ListItemText
            primary="Labs"
            primaryTypographyProps={{
              sx: {
                fontSize: '0.875rem', // Adjust font size here
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '150px', // Adjust width here
              }
            }}
          />
        </ListItem>

        <ListItem component={Link} to="/slipta_home" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText
            primary="SLIPTA Checklist"
            primaryTypographyProps={{
              sx: {
                fontSize: '0.875rem', // Adjust font size here
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '150px', // Adjust width here
              }
            }}
          />
        </ListItem>

        <ListItem component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText
            primary="SADCAS F134 - A"
            primaryTypographyProps={{
              sx: {
                fontSize: '0.875rem', // Adjust font size here
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '150px', // Adjust width here
              }
            }}
          />
        </ListItem>

        <ListItem component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText
            primary="SADCAS F134 - B"
            primaryTypographyProps={{
              sx: {
                fontSize: '0.875rem', // Adjust font size here
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '150px', // Adjust width here
              }
            }}
          />
        </ListItem>

        {/* Divider below the Laboratory Profile item */}
        <Divider sx={{ height: '2px', backgroundColor: 'grey.300' }} />

        {/* Other items displayed based on showItems */}
        {showItems && items.map((item, index) => (
          <Tooltip title={item.tooltip} placement="right" key={index}>
            <ListItem component={Link} to={appendLabProfileId(item.link)} sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '0.875rem', // Adjust font size here
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '150px', // Adjust width here
                  }
                }}
              />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarQ;
