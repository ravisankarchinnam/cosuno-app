import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: 'primary.main', py: 3 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: 'primary.contrastText', textAlign: 'center' }}
          >
            Copyright © 2022 All rights reserved
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
