import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        داشبورد
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              تعداد حساب‌ها
            </Typography>
            <Typography variant="h3">12</Typography>
          </Paper>
        </Grid>
        {/* سایر آمارها */}
      </Grid>
    </Box>
  );
};

export default Dashboard;