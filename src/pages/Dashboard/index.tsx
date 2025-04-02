import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  AccountBalanceWallet,
  TrendingUp,
  TrendingDown,
  Receipt,
} from '@mui/icons-material';

// کامپوننت کارت آمار
const StatCard = ({ title, value, icon: Icon, color }: {
  title: string;
  value: string;
  icon: typeof AccountBalanceWallet;
  color: string;
}) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ color: color }} />
        </Box>
        <Typography variant="h4" sx={{ color: 'text.primary' }}>
          {value}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        داشبورد
      </Typography>

      {/* کارت‌های آمار */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="موجودی کل"
            value="۱۲,۵۰۰,۰۰۰"
            icon={AccountBalanceWallet}
            color="#2563eb"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="درآمد ماهانه"
            value="۳,۲۰۰,۰۰۰"
            icon={TrendingUp}
            color="#16a34a"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="هزینه‌های ماهانه"
            value="۲,۸۰۰,۰۰۰"
            icon={TrendingDown}
            color="#dc2626"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="تعداد تراکنش‌ها"
            value="۱,۲۳۴"
            icon={Receipt}
            color="#0ea5e9"
          />
        </Grid>
      </Grid>

      {/* بخش نمودارها بعداً اضافه می‌شود */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              نمودارها به زودی اضافه می‌شوند
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;