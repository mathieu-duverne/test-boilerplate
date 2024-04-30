import axios from 'axios';

export interface Action {
  name: string;
  maxCredits: number;
  credits: number;
}

export const getActions = async () => {
  const response = await axios.get('http://localhost:3000/actions');
  return response.data;
};

