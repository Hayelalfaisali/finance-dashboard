import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

interface Transaction {
  id: number;
  type: "income" | "expense";
  description: string;
  amount: number;
  date: string;
  category: string;
}

const RecentTransactions: React.FC = () => {
  // Example transactions - replace with actual data from your state management
  const transactions: Transaction[] = [
    {
      id: 1,
      type: "expense",
      description: "Grocery Shopping",
      amount: 120.50,
      date: "2024-01-15",
      category: "Food"
    },
    {
      id: 2,
      type: "income",
      description: "Salary Deposit",
      amount: 3000.00,
      date: "2024-01-14",
      category: "Salary"
    },
    {
      id: 3,
      type: "expense",
      description: "Netflix Subscription",
      amount: 15.99,
      date: "2024-01-13",
      category: "Entertainment"
    },
  ];

  return (
    <Box p={5} borderRadius="lg" bg="white" boxShadow="sm">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Recent Transactions</Heading>

        {transactions.map((transaction) => (
          <HStack key={transaction.id} justify="space-between" p={3} 
                 borderRadius="md" bg="gray.50" _hover={{ bg: "gray.100" }}>
            <HStack spacing={4}>
              <Icon
                as={transaction.type === "income" ? FiArrowDownLeft : FiArrowUpRight}
                color={transaction.type === "income" ? "green.500" : "red.500"}
                boxSize={5}
              />
              <Box>
                <Text fontWeight="medium">{transaction.description}</Text>
                <Text fontSize="sm" color="gray.500">
                  {new Date(transaction.date).toLocaleDateString()}
                </Text>
              </Box>
            </HStack>

            <HStack spacing={3}>
              <Badge colorScheme={transaction.type === "income" ? "green" : "red"}>
                {transaction.category}
              </Badge>
              <Text fontWeight="bold" color={transaction.type === "income" ? "green.500" : "red.500"}>
                {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
              </Text>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default RecentTransactions;
