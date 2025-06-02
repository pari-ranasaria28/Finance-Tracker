
export type TransactionType = 'income' | 'expense';

export type TransactionCategory = 
  | 'salary' | 'freelance' | 'investment' | 'gift' | 'other_income'
  | 'food' | 'transportation' | 'housing' | 'utilities' | 'healthcare' 
  | 'entertainment' | 'shopping' | 'education' | 'travel' | 'other_expense';

export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  description?: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  email?: string;
  full_name?: string;
  created_at: string;
  updated_at: string;
}

export const INCOME_CATEGORIES: TransactionCategory[] = [
  'salary', 'freelance', 'investment', 'gift', 'other_income'
];

export const EXPENSE_CATEGORIES: TransactionCategory[] = [
  'food', 'transportation', 'housing', 'utilities', 'healthcare', 
  'entertainment', 'shopping', 'education', 'travel', 'other_expense'
];

export const CATEGORY_LABELS: Record<TransactionCategory, string> = {
  salary: 'Salary',
  freelance: 'Freelance',
  investment: 'Investment',
  gift: 'Gift',
  other_income: 'Other Income',
  food: 'Food & Dining',
  transportation: 'Transportation',
  housing: 'Housing',
  utilities: 'Utilities',
  healthcare: 'Healthcare',
  entertainment: 'Entertainment',
  shopping: 'Shopping',
  education: 'Education',
  travel: 'Travel',
  other_expense: 'Other Expense'
};
