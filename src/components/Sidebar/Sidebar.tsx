import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiTrendingUp,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi';
import ThemeToggle from '../../theme/ThemeToggle';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  icon: React.ElementType;
  children: string;
  to: string;
}

const NavItem = ({ icon, children, to }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeBg = useColorModeValue('blue.50', 'blue.900');
  const activeColor = useColorModeValue('blue.600', 'blue.200');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Link to={to}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : 'transparent'}
        color={isActive ? activeColor : undefined}
        _hover={{
          bg: isActive ? activeBg : hoverBg,
        }}
        transition=".2s ease"
        onClick={(e) => {
          if (window.innerWidth < 768) {
            e.preventDefault();
            const link = e.currentTarget as HTMLElement;
            link.click();
          }
        }}
      >
        <Icon
          mr="4"
          fontSize="16"
          as={icon}
          color={isActive ? activeColor : undefined}
        />
        <Text fontSize="sm" fontWeight={isActive ? 'medium' : 'normal'}>
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

const SidebarContent = ({ onClose }: { onClose: () => void }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const menuBg = useColorModeValue('white', 'gray.800');

  return (
    <Box
      w={{ base: 'full', md: '64' }}
      pos="fixed"
      h="full"
      bg={menuBg}
      borderRightWidth="1px"
      borderColor={borderColor}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Finance
        </Text>
      </Flex>
      <VStack spacing="1" align="stretch" mt="6">
        <NavItem icon={FiHome} to="/" onClick={onClose}>
          Dashboard
        </NavItem>
        <NavItem icon={FiTrendingUp} to="/analytics" onClick={onClose}>
          Analytics
        </NavItem>
        <NavItem icon={FiDollarSign} to="/transactions" onClick={onClose}>
          Transactions
        </NavItem>
      </VStack>
      <Box pos="absolute" bottom="0" w="full" p="4">
        <VStack spacing="4" align="stretch">
          <HStack justify="space-between" px="4">
            <Menu>
              <MenuButton>
                <HStack spacing="3">
                  <Avatar size="sm" name="Hayel Al-Faisali" />
                  <Box>
                    <Text fontSize="sm" fontWeight="medium">
                      Hayel Al-Faisali
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      Admin
                    </Text>
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Box px="4">
            <ThemeToggle />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <SidebarContent onClose={onClose} />
      </Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody p="0">
            <SidebarContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
