import {
  Box,
  Text,
  Progress,
  VStack,
  HStack,
  Spacer,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

interface BudgetItemProps {
  category: string;
  spent: number;
  total: number;
  color: string;
}

const BudgetItem = ({ category, spent, total, color }: BudgetItemProps) => {
  const percentage = (spent / total) * 100;
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const amountColor = useColorModeValue('gray.900', 'white');

  return (
    <Box w="full">
      <HStack mb="2">
        <Text fontSize="sm" color={textColor}>
          {category}
        </Text>
        <Spacer />
        <Text fontSize="sm" fontWeight="medium" color={amountColor}>
          ${spent.toLocaleString()}
          <Text as="span" color={textColor} fontWeight="normal">
            {' '}
            / ${total.toLocaleString()}
          </Text>
        </Text>
      </HStack>
      <Progress
        value={percentage}
        size="sm"
        colorScheme={color}
        borderRadius="full"
        bg={useColorModeValue(`${color}.50`, `${color}.900`)}
      />
    </Box>
  );
};

const BudgetOverview = () => {
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const boxBg = useColorModeValue('white', 'gray.700');
  const boxShadow = useColorModeValue('sm', 'xl');

  // Example data - replace with actual data from your state management
  const budget = {
    total: 5000,
    spent: 3200,
    remaining: 1800,
  };

  const spentPercentage = (budget.spent / budget.total) * 100;

  return (
    <Box p={5} borderRadius="lg" bg={boxBg} boxShadow={boxShadow}>
      <VStack align="stretch" spacing={4}>
        <Heading size="md" color={headingColor}>
          Budget Overview
        </Heading>
        
        <Box>
          <HStack justify="space-between" mb={2}>
            <Text color={textColor}>Monthly Budget</Text>
            <Text fontWeight="bold">${budget.total.toLocaleString()}</Text>
          </HStack>
          
          <Progress
            value={spentPercentage}
            colorScheme={spentPercentage > 80 ? "red" : "green"}
            size="sm"
            borderRadius="full"
          />
          
          <HStack justify="space-between" mt={2}>
            <Text fontSize="sm" color={textColor}>
              Spent: ${budget.spent.toLocaleString()}
            </Text>
            <Text fontSize="sm" color={textColor}>
              Remaining: ${budget.remaining.toLocaleString()}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default BudgetOverview;
