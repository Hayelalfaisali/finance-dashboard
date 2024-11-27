import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        onClick={toggleColorMode}
        variant="ghost"
        size="sm"
        fontSize="xl"
        _hover={{ color: 'blue.500' }}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
