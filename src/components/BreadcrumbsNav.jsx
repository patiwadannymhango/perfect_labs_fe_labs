// src/components/BreadcrumbsNav.js

import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link color="inherit" href="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="textPrimary" key={to}>
            {value}
          </Typography>
        ) : (
          <Link color="inherit" href={to} key={to}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
