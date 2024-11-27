import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSearch, FiDownload } from 'react-icons/fi';

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  status: 'completed' | 'pending' | 'failed';
}

const transactions: Transaction[] = [
  {
    id: '1',
    date: '2024-01-20',
    description: 'Salary Deposit',
    category: 'Income',
    amount: 5000,
    type: 'income',
    status: 'completed',
  },
  {
    id: '2',
    date: '2024-01-19',
    description: 'Grocery Shopping',
    category: 'Food',
    amount: 150.75,
    type: 'expense',
    status: 'completed',
  },
  {
    id: '3',
    date: '2024-01-18',
    description: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 15.99,
    type: 'expense',
    status: 'pending',
  },
  // Add more transactions as needed
];

const Transactions = () => {
  const tableBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box p={8}>
      <HStack spacing={4} mb={6}>
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search transactions..." />
        </InputGroup>
        <Select placeholder="Filter by category" maxW="200px">
          <option value="all">All Categories</option>
          <option value="income">Income</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
        </Select>
        <Select placeholder="Filter by status" maxW="200px">
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </Select>
        <Button leftIcon={<FiDownload />} colorScheme="blue">
          Export
        </Button>
      </HStack>

      <Box
        bg={tableBg}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        overflow="hidden"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{new Date(transaction.date).toLocaleDateString()}</Td>
                <Td>{transaction.description}</Td>
                <Td>
                  <Badge
                    colorScheme={transaction.type === 'income' ? 'green' : 'blue'}
                  >
                    {transaction.category}
                  </Badge>
                </Td>
                <Td
                  color={transaction.type === 'income' ? 'green.500' : 'red.500'}
                  fontWeight="semibold"
                >
                  {transaction.type === 'income' ? '+' : '-'}$
                  {transaction.amount.toLocaleString()}
                </Td>
                <Td>
                  <Badge
                    colorScheme={
                      transaction.status === 'completed'
                        ? 'green'
                        : transaction.status === 'pending'
                        ? 'yellow'
                        : 'red'
                    }
                  >
                    {transaction.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Transactions;
