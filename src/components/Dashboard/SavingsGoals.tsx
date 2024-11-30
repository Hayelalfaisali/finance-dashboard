import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

interface SavingsGoalProps {
  name: string;
  current: number;
  target: number;
  color: string;
}

const SavingsGoal = ({ name, current, target, color }: SavingsGoalProps) => {
  const percentage = (current / target) * 100;
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const amountColor = useColorModeValue('gray.900', 'white');
  const trackColor = useColorModeValue(`${color}.50`, `${color}.900`);

  return (
    <Box
      p="4"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('white', 'gray.800')}
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
    >
      <HStack spacing="4">
        <CircularProgress
          value={percentage}
          color={color}
          size="60px"
          thickness="8px"
          trackColor={trackColor}
        >
          <CircularProgressLabel fontSize="sm" color={amountColor}>
            {percentage.toFixed(0)}%
          </CircularProgressLabel>
        </CircularProgress>
        <Box flex="1">
          <Text fontWeight="medium" mb="1" color={amountColor}>
            {name}
          </Text>
          <Text fontSize="sm" color={textColor}>
            ${current.toLocaleString()} of ${target.toLocaleString()}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

const SavingsGoals = () => {
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Text fontSize="lg" fontWeight="medium" mb="4" color={headingColor}>
        Savings Goals
      </Text>
      <Text fontSize="sm" color={textColor} mb="6">
        Track your progress towards financial goals
      </Text>
      <VStack spacing="4" align="stretch">
        <SavingsGoal
          name="Emergency Fund"
          current={6500}
          target={10000}
          color="blue"
        />
        <SavingsGoal
          name="New Car"
          current={8000}
          target={25000}
          color="green"
        />
        <SavingsGoal
          name="Vacation"
          current={4200}
          target={5000}
          color="purple"
        />
      </VStack>
    </Box>
  );
};

export default SavingsGoals;
