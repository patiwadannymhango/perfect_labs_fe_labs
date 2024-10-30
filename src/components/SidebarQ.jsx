import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Divider,
  Collapse,
} from "@mui/material";
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
  Biotech,
  Summarize, // Import the new icon for Audit Summary
} from "@mui/icons-material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import RecyclingIcon from "@mui/icons-material/Recycling";
import Groups2Icon from "@mui/icons-material/Groups2";

import SaveIcon from "@mui/icons-material/Save";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useSelector } from "react-redux"; // Import useSelector
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import VerifiedIcon from "@mui/icons-material/Verified";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { setShowItems2 } from "../redux/labSidebarSlice";
import { useDispatch } from "react-redux";

const SidebarQ = () => {
  const drawerWidth = 320;
  // Retrieve the necessary values from Redux store
  const showItems = useSelector((state) => state.sidebar.showItems);
  const showItems2 = useSelector((state) => state.labsidebar.showItems2);
  const showItems3 = useSelector((state) => state.sadcasAsidebar.showItems3);
  const showItems4 = useSelector((state) => state.sadcasBsidebar.showItems4);
  const labProfileId = useSelector((state) => state.sidebar.labProfileId); // Add this line
  const [openLabTests, setOpenLabTests] = useState(true); // Keep the section open initially
  const [openSection, setOpenSection] = useState(null); // Track which section is open
  const [mapping, setMapping] = useState(null); // Track which section is open
  const [openInforMenu, setInforMenu] = useState(null);

  const dispatch = useDispatch();
  // Reusable function to generate the full link including labProfileId if available

  const handleInforMenuClick = () => {
    if (showItems2) {
      dispatch(setShowItems2(false));
    } else {
      dispatch(setShowItems2(true));
    }
  };

  // Toggle section based on item clicked
  const handleSectionClick = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName); // Toggle between open/close
  };

  const location = useLocation();

  const lab_map = () => {
    //
  };

  useEffect(() => {
    // Example: if current location matches any nested links, open the 'labTests' section
    if (location.pathname.includes("/lab_tests")) {
      setOpenSection("labTests");
    }
  }, [location.pathname]);

  // Define your items with tooltips, icons, and corresponding links
  const items = [
    {
      text: "Audit Summary",
      tooltip: "Audit Summary Overview",
      link: "/slipta_lab_profile",
    },
  ];

  const items2 = [
    {
      text: "  Profile",
      tooltip: "Laboratory Profile",
      icon: <ContentPasteGoIcon />,
      link: "/lab_profile",
    },
    {
      text: "  Infrastructure",
      tooltip: "Laboratory Profile",
      icon: <Home />,
      link: "/lab_infrastructure",
    },
    {
      text: "  Staffing Levels",
      tooltip: "Laboratory Staffing",
      icon: <Groups2Icon />,
      link: "/lab_staffing",
    },
    {
      text: "   Lab Test Menu",
      tooltip: "",
      icon: <Biotech />,
      onClick: () => handleSectionClick("labTests"),
      nested: [
        {
          text: "Serology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/serology",
        },
        {
          text: "Haematology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/haematology",
        },
        {
          text: "Microbiology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/microbiology",
        },
        {
          text: "Parasitology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/parasitology",
        },
        {
          text: "Blood Bank Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/bloodbank",
        },
        {
          text: "Biochemistry Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/biochemistry",
        },
        {
          text: "Molecular Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/molecular",
        },
        {
          text: "Pathology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/pathology",
        },
        {
          text: "Cytology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/cytology",
        },
        {
          text: "Immunology Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/immunology",
        },
        {
          text: "Special Test Section",
          icon: <EditAttributesIcon />,
          link: "/lab_tests/specialtest",
        },
      ],
    },

    {
      text: "Comms & Reports",
      tooltip: "Communication and Reports",
      icon: <Assessment />,
      link: "/lab_comms_reports",
    },
    {
      text: "Specimen Referral",
      tooltip: "Specimen Referral",
      icon: <Warning />,
      link: "/lab_specimen_ref",
    },
    {
      text: "Biosafety and Biosecurity",
      tooltip: "Biosafety and Biosecurity",
      icon: <RecyclingIcon />,
      link: "/lab_biosafety",
    },
    {
      text: "Logistics and Supply Chain Management",
      tooltip: "Logistics and Supply Chain Management",
      icon: <MinorCrashIcon />,
      link: "/lab_logistics",
    },
    {
      text: "Quality Management System",
      tooltip: "Quality Management System",
      icon: <VerifiedIcon />,
      link: "/lab_qms",
    },
    {
      text: "Mentorship Program",
      tooltip: "Mentorship Programy",
      icon: <SupportAgentIcon />,
      link: "/lab_mentorship",
    },
    {
      text: "Audits",
      tooltip: "Laboratory Audits",
      icon: <FactCheckIcon />,
      link: "/lab_audits",
    },
  ];

  const appendLabProfileId = (link) => {
    return labProfileId ? `${link}/${labProfileId}/` : link;
  };

  const renderListItem = (item, isNested = false) => (
    <CSSTransition key={item.text} timeout={500} classNames="fade">
      <ListItem
        component={item.link ? Link : "div"}
        to={item.link ? appendLabProfileId(item.link) : undefined}
        onClick={item.onClick}
        sx={{
          textDecoration: "none",
          color: "inherit",
          marginLeft: isNested ? "60px" : "30px",
          pl: isNested ? 4 : 0,
          transition: "all 0.9s ease",
        }}
      >
        <ListItemIcon
          sx={{
            color: location.pathname.includes(item.link)
              ? "#1876D1"
              : "inherit",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            sx: {
              fontSize: isNested ? "0.81rem" : "0.875rem",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "150px",
              color: location.pathname.includes(item.link)
                ? "#1876D1"
                : "inherit",
            },
          }}
        />
        {item.nested &&
          (openSection === "labTests" ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon />
          ))}
      </ListItem>
    </CSSTransition>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <List sx={{ mt: "110px" }}>
        {/* Laboratory Profile item at the top */}
        <ListItem
          component={Link}
          to="/"
          onClick={handleInforMenuClick}
          sx={{
            textDecoration: "none",
            // color: 'inherit',
            color: location.pathname === "/" ? "#1876D1" : "inherit",
          }}
        >
          <ListItemText
            primary="LABORATORY INFORMATION"
            primaryTypographyProps={{
              sx: {
                fontWeight: "bold",
                fontSize: "0.875rem", // Adjust font size here
                // Increase font weight
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "250px", // Adjust width here
              },
            }}
          />
        </ListItem>

        <Divider sx={{ height: "2px", backgroundColor: "gray.300" }} />

        {showItems2 &&
          items2.map((item, index) => (
            <React.Fragment key={index}>
              <Tooltip title={item.tooltip} placement="right">
                <ListItem
                  component={item.link ? Link : "div"}
                  to={item.link ? appendLabProfileId(item.link) : null}
                  sx={{
                    textDecoration: "none",
                    marginLeft: "30px",
                    color: "inherit",
                  }}
                  onClick={item.onClick}
                >
                  <ListItemIcon
                    sx={{
                      color: location.pathname.includes(item.link)
                        ? "#1876D1"
                        : "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "0.875rem",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "150px",

                        color: location.pathname.includes(item.link)
                          ? "#1876D1" // Highlight color for matching paths
                          : "inherit",
                      },
                    }}
                  />
                  {/* Toggle expand/collapse icon for nested items */}
                  {item.nested &&
                    (openSection === "labTests" ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    ))}
                </ListItem>
              </Tooltip>

              {/* Nested menu */}
              {item.nested && (
                <Collapse
                  in={openSection === "labTests"}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.nested.map((nestedItem) =>
                      renderListItem(nestedItem, true)
                    )}
                  </List>
                </Collapse>
              )}

              {/* Divider below Laboratory Test Manual */}
              {item.text === "Laboratory Test Manual" && (
                <Divider
                  sx={{ height: "2px", backgroundColor: "gray.300", mt: 1 }}
                />
              )}
            </React.Fragment>
          ))}
      </List>
    </Drawer>
  );
};

export default SidebarQ;
