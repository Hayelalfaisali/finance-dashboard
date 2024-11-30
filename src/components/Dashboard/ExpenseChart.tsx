import { Box, Heading, Select, HStack, Badge, useColorModeValue } from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useState } from 'react';

interface ChartData {
  name: string;
  expenses: number;
  income: number;
}

const generateData = (months: number): ChartData[] => {
  const currentDate = new Date();
  const data: ChartData[] = [];
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    data.push({
      name: date.toLocaleString('default', { month: 'short' }),
      expenses: Math.floor(Math.random() * 3000) + 2000,
      income: Math.floor(Math.random() * 4000) + 4000,
    });
  }
  
  return data;
};

const ExpenseChart = () => {
  const [timeRange, setTimeRange] = useState('6');
  const data = generateData(parseInt(timeRange));
  
  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
  const savings = totalIncome - totalExpenses;
  const savingsRate = Math.round((savings / totalIncome) * 100);

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" height="400px">
      <HStack justify="space-between" mb={4} align="center">
        <Box>
          <Heading size="md">Income vs Expenses</Heading>
          <HStack spacing={4} mt={2}>
            <Badge colorScheme="green" fontSize="sm" px={2} py={1}>
              Income: ${totalIncome.toLocaleString()}
            </Badge>
            <Badge colorScheme="red" fontSize="sm" px={2} py={1}>
              Expenses: ${totalExpenses.toLocaleString()}
            </Badge>
            <Badge colorScheme="blue" fontSize="sm" px={2} py={1}>
              Savings Rate: {savingsRate}%
            </Badge>
          </HStack>
        </Box>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          width="150px"
        >
          <option value="12">Last 12 months</option>
          <option value="6">Last 6 months</option>
          <option value="3">Last 3 months</option>
        </Select>
      </HStack>
      
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#48BB78" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#48BB78" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F56565" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#F56565" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#48BB78"
            fill="url(#colorIncome)"
            strokeWidth={2}
            name="Income"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#F56565"
            fill="url(#colorExpenses)"
            strokeWidth={2}
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ExpenseChart;
