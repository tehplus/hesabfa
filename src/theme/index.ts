import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    sidebar: {
      background: string;
      menuBackground: string;
      text: string;
      border: string;
      activeText: string;
      activeBackground: string;
      hoverBackground: string;
      iconColor: string;
      activeIconColor: string;
      boxShadow: string;
    };
  }
  interface PaletteOptions {
    sidebar?: {
      background?: string;
      menuBackground?: string;
      text?: string;
      border?: string;
      activeText?: string;
      activeBackground?: string;
      hoverBackground?: string;
      iconColor?: string;
      activeIconColor?: string;
      boxShadow?: string;
    };
  }
}

// فونت‌های فارسی
const fontFamily = [
  'IRANYekan',
  'Vazirmatn',
  'Tahoma',
  'Arial',
  'sans-serif'
].join(',');

// ساخت تم اصلی
const baseTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily,
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
});

// تم نهایی با رنگ‌های سفارشی
const theme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626',
      light: '#f87171',
      dark: '#991b1b',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f59e0b',
      light: '#fcd34d',
      dark: '#b45309',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0ea5e9',
      light: '#7dd3fc',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
    success: {
      main: '#16a34a',
      light: '#4ade80',
      dark: '#15803d',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      disabled: '#9ca3af',
    },
    divider: '#e5e7eb',
    sidebar: {
      background: '#ffffff',
      menuBackground: '#f9fafb',
      text: '#4b5563',
      border: '#e5e7eb',
      activeText: '#2563eb',
      activeBackground: alpha('#2563eb', 0.08),
      hoverBackground: alpha('#2563eb', 0.04),
      iconColor: '#6b7280',
      activeIconColor: '#2563eb',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f9fafb',
          scrollbarWidth: 'thin',
          scrollbarColor: '#9ca3af transparent',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#9ca3af',
            borderRadius: '3px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#4b5563',
          borderLeft: 'none',
          borderRight: '1px solid #e5e7eb',
          right: 0,
          left: 'auto',
          transition: 'right 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 6px rgba(0, 0, 0, 0.05)',
    '0px 6px 8px rgba(0, 0, 0, 0.05)',
    '0px 8px 12px rgba(0, 0, 0, 0.05)',
    '0px 12px 16px rgba(0, 0, 0, 0.05)',
    '0px 16px 24px rgba(0, 0, 0, 0.05)',
    '0px 20px 28px rgba(0, 0, 0, 0.05)',
    '0px 24px 32px rgba(0, 0, 0, 0.05)',
    '0px 28px 36px rgba(0, 0, 0, 0.05)',
    '0px 32px 40px rgba(0, 0, 0, 0.05)',
    '0px 36px 44px rgba(0, 0, 0, 0.05)',
    '0px 40px 48px rgba(0, 0, 0, 0.05)',
    '0px 44px 52px rgba(0, 0, 0, 0.05)',
    '0px 48px 56px rgba(0, 0, 0, 0.05)',
    '0px 52px 60px rgba(0, 0, 0, 0.05)',
    '0px 56px 64px rgba(0, 0, 0, 0.05)',
    '0px 60px 68px rgba(0, 0, 0, 0.05)',
    '0px 64px 72px rgba(0, 0, 0, 0.05)',
    '0px 68px 76px rgba(0, 0, 0, 0.05)',
    '0px 72px 80px rgba(0, 0, 0, 0.05)',
    '0px 76px 84px rgba(0, 0, 0, 0.05)',
    '0px 80px 88px rgba(0, 0, 0, 0.05)',
    '0px 84px 92px rgba(0, 0, 0, 0.05)',
    '0px 88px 96px rgba(0, 0, 0, 0.05)',
  ],
});

export default theme;