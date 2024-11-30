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
  const bgColor = useColorModeValue('white', 'gray.800');

  const budgetItems = [
    { category: 'Housing', spent: 1200, total: 1500, color: 'blue' },
    { category: 'Food', spent: 400, total: 600, color: 'green' },
    { category: 'Transportation', spent: 200, total: 300, color: 'purple' },
    { category: 'Entertainment', spent: 150, total: 200, color: 'orange' },
  ];

  return (
    <Box p={5} bg={bgColor} borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={4}>Budget Overview</Heading>
      <VStack spacing={4} align="stretch">
        {budgetItems.map((item, index) => (
          <BudgetItem
            key={index}
            category={item.category}
            spent={item.spent}
            total={item.total}
            color={item.color}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default BudgetOverview;
