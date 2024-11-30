import {
  Box,
  Grid,
  Heading,
  Select,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 4800, expenses: 3100 },
  { month: 'Mar', income: 5200, expenses: 3800 },
  { month: 'Apr', income: 4900, expenses: 3400 },
  { month: 'May', income: 5100, expenses: 3600 },
  { month: 'Jun', income: 5400, expenses: 3900 },
];

const expensesByCategory = [
  { name: 'Housing', value: 1200, color: '#FF8042' },
  { name: 'Food', value: 800, color: '#00C49F' },
  { name: 'Transportation', value: 400, color: '#FFBB28' },
  { name: 'Entertainment', value: 300, color: '#0088FE' },
  { name: 'Utilities', value: 250, color: '#FF6B6B' },
];

const Analytics = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const totalIncome = monthlyData.reduce((sum, month) => sum + month.income, 0);
  const totalExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0);
  const savingsRate = ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1);

  return (
    <Box p={8}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
        <Stat bg={cardBg} p={4} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <StatLabel>Total Income</StatLabel>
          <StatNumber>${totalIncome.toLocaleString()}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8.2%
          </StatHelpText>
        </Stat>
        <Stat bg={cardBg} p={4} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>${totalExpenses.toLocaleString()}</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            3.1%
          </StatHelpText>
        </Stat>
        <Stat bg={cardBg} p={4} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <StatLabel>Savings Rate</StatLabel>
          <StatNumber>{savingsRate}%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.3%
          </StatHelpText>
        </Stat>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* Income vs Expenses Chart */}
        <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <Heading size="md" mb={4}>Income vs Expenses Trend</Heading>
          <Select mb={4} maxW="200px">
            <option value="6months">Last 6 months</option>
            <option value="3months">Last 3 months</option>
            <option value="1year">Last year</option>
          </Select>
          <Box height="400px">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#4299E1" name="Income" />
                <Bar dataKey="expenses" fill="#F56565" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {/* Expense Categories Chart */}
        <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <Heading size="md" mb={4}>Expenses by Category</Heading>
          <Select mb={4} maxW="200px">
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="last3Months">Last 3 Months</option>
          </Select>
          <Box height="400px">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Analytics;
