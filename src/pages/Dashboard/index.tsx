import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  AccountBalanceWallet,
  TrendingUp,
  TrendingDown,
  MoreVert,
  AccountBalance,
  PeopleAlt,
  Receipt,
  Payment,
} from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

// داده‌های نمونه برای نمودار درآمد
const revenueData = [
  { name: 'فروردین', amount: 4000 },
  { name: 'اردیبهشت', amount: 3000 },
  { name: 'خرداد', amount: 2000 },
  { name: 'تیر', amount: 2780 },
  { name: 'مرداد', amount: 1890 },
  { name: 'شهریور', amount: 2390 },
  { name: 'مهر', amount: 3490 },
];

// داده‌های نمونه برای نمودار دایره‌ای هزینه‌ها
const expenseData = [
  { name: 'حقوق و دستمزد', value: 400, color: '#2563eb' },
  { name: 'اجاره', value: 300, color: '#7c3aed' },
  { name: 'تجهیزات', value: 300, color: '#0ea5e9' },
  { name: 'بازاریابی', value: 200, color: '#16a34a' },
];

// داده‌های نمونه برای نمودار ستونی مقایسه‌ای
const compareData = [
  { name: 'فروردین', income: 4000, expense: 2400 },
  { name: 'اردیبهشت', income: 3000, expense: 1398 },
  { name: 'خرداد', income: 2000, expense: 9800 },
  { name: 'تیر', income: 2780, expense: 3908 },
  { name: 'مرداد', income: 1890, expense: 4800 },
  { name: 'شهریور', income: 2390, expense: 3800 },
];

// کارت آمار
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
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        داشبورد
      </Typography>

      {/* کارت‌های آمار */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="موجودی کل"
            value="۱۲,۵۰۰,۰۰۰ تومان"
            icon={AccountBalanceWallet}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="درآمد ماهانه"
            value="۳,۲۰۰,۰۰۰ تومان"
            icon={TrendingUp}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="هزینه‌های ماهانه"
            value="۲,۸۰۰,۰۰۰ تومان"
            icon={TrendingDown}
            color={theme.palette.error.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="تعداد تراکنش‌ها"
            value="۱,۲۳۴"
            icon={Receipt}
            color={theme.palette.info.main}
          />
        </Grid>
      </Grid>

      {/* نمودارها */}
      <Grid container spacing={3}>
        {/* نمودار درآمد */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardHeader
              title="نمودار درآمد"
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.light}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* نمودار دایره‌ای هزینه‌ها */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="توزیع هزینه‌ها"
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* نمودار مقایسه درآمد و هزینه */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="مقایسه درآمد و هزینه"
              action={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={compareData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="income"
                      name="درآمد"
                      fill={theme.palette.success.main}
                    />
                    <Bar
                      dataKey="expense"
                      name="هزینه"
                      fill={theme.palette.error.main}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;