import { Box, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const mainBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <Flex h="100vh" w="100vw" bg={bgColor}>
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box
          as="main"
          flex="1"
          ml={{ base: 0, md: '64' }}
          transition=".3s ease"
          p={{ base: '4', md: '6' }}
          overflow="auto"
          bg={bgColor}
          sx={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: useColorModeValue('gray.300', 'gray.600'),
              borderRadius: '24px',
            },
          }}
        >
          <Box
            maxW="1600px"
            mx="auto"
            w="full"
            bg={mainBg}
            borderRadius={{ base: 'lg', md: '2xl' }}
            shadow="sm"
            borderWidth="1px"
            borderColor={borderColor}
            overflow="hidden"
          >
            <Routes>
              <Route path="/" element={<DashboardLayout onMobileMenuClick={onOpen} />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Box>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
