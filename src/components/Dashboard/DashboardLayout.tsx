import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Flex,
  Text,
  Icon,
  Badge,
  HStack,
  Select,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiMenu } from 'react-icons/fi';
import ExpenseChart from './ExpenseChart';
import BudgetOverview from './BudgetOverview';
import SavingsGoals from './SavingsGoals';
import ThemeToggle from '../../theme/ThemeToggle';

interface StatCardProps {
  title: string;
  stat: string;
  icon: React.ElementType;
  change: number;
  type: 'increase' | 'decrease';
}

interface DashboardLayoutProps {
  onMobileMenuClick: () => void;
}

function StatCard({ title, stat, icon, change, type }: StatCardProps) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const iconBg = useColorModeValue('blue.50', 'blue.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const statColor = useColorModeValue('gray.900', 'white');

  return (
    <Stat
      px={{ base: '4', md: '6' }}
      py={{ base: '3', md: '4' }}
      bg={cardBg}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      overflow="hidden"
      role="group"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        shadow: 'md',
        borderColor: 'blue.400',
      }}
    >
      <Flex justify="space-between" align="flex-start">
        <Box flex="1">
          <StatLabel color={textColor} fontSize="sm">
            {title}
          </StatLabel>
          <StatNumber fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mt="1" color={statColor}>
            {stat}
          </StatNumber>
          <StatHelpText mb="0" color={textColor}>
            <StatArrow type={type} />
            {change}%
          </StatHelpText>
        </Box>
        <Flex
          p="2"
          bg={iconBg}
          borderRadius="lg"
          color="blue.500"
          transition="all 0.2s"
          _groupHover={{
            bg: 'blue.500',
            color: 'white',
          }}
        >
          <Icon as={icon} w={{ base: '5', md: '6' }} h={{ base: '5', md: '6' }} />
        </Flex>
      </Flex>
    </Stat>
  );
}

const DashboardLayout = ({ onMobileMenuClick }: DashboardLayoutProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'white');
  const selectBg = useColorModeValue('white', 'gray.700');

  return (
    <Box p={{ base: '4', md: '6' }}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={{ base: '6', md: '8' }}>
        <Box>
          <HStack spacing="4">
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onMobileMenuClick}
              variant="ghost"
              aria-label="open menu"
              icon={<FiMenu />}
            />
            <Box>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color={headingColor}>
                Dashboard Overview
              </Text>
              <Text color={textColor} fontSize="sm">
                Welcome back, John Doe
              </Text>
            </Box>
          </HStack>
        </Box>
        <HStack spacing="4">
          <Box display={{ base: 'block', md: 'none' }}>
            <ThemeToggle />
          </Box>
          <Badge colorScheme="green" px="3" py="1" borderRadius="full">
            Active
          </Badge>
          <Select
            size="sm"
            maxW={{ base: '120px', md: '200px' }}
            defaultValue="thisMonth"
            borderRadius="lg"
            bg={selectBg}
            display={{ base: 'none', md: 'block' }}
          >
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastQuarter">Last Quarter</option>
          </Select>
        </HStack>
      </Flex>

      {/* Stats Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: '4', md: '6' }}
        mb={{ base: '6', md: '8' }}
      >
        <StatCard
          title="Total Balance"
          stat="$23,500"
          icon={FiDollarSign}
          change={12}
          type="increase"
        />
        <StatCard
          title="Monthly Income"
          stat="$8,950"
          icon={FiTrendingUp}
          change={8.2}
          type="increase"
        />
        <StatCard
          title="Monthly Expenses"
          stat="$5,400"
          icon={FiTrendingDown}
          change={5.1}
          type="decrease"
        />
      </SimpleGrid>

      {/* Charts Grid */}
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: '4', md: '6' }}
        mb={{ base: '6', md: '8' }}
      >
        <Box
          bg={cardBg}
          p={{ base: '4', md: '6' }}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <ExpenseChart />
        </Box>
        <Box
          bg={cardBg}
          p={{ base: '4', md: '6' }}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <BudgetOverview />
        </Box>
      </SimpleGrid>

      {/* Bottom Section */}
      <Box
        bg={cardBg}
        p={{ base: '4', md: '6' }}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <SavingsGoals />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
