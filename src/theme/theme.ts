import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      '*': {
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
      baseStyle: {
        _hover: {
          transform: 'translateY(-1px)',
        },
        transition: 'all 0.2s',
      },
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'lg',
          borderWidth: '1px',
          borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
          transition: 'all 0.2s',
        },
      }),
    },
    Tooltip: {
      baseStyle: {
        borderRadius: 'md',
        px: '3',
        py: '2',
      },
    },
  },
  colors: {
    brand: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
  },
  shadows: {
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  },
  radii: {
    button: 'lg',
  },
});

export default theme;
