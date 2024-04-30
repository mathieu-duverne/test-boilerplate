import axios from 'axios';

export const fetchQueue = async () => {
  try {
    const response = await axios.get('http://localhost:3000/queue');
    return response.data;
  } catch (error) {
    console.error('Error fetching queue:', error);
    return [];
  }
};

export const enqueue = async (name: string) => {
  try{ 
  const response = await axios.post('http://localhost:3000/enqueue', { name: name });
  return response.data;
  } catch(error) {
    console.error('Error posting action in the queue:', error);
    return [];
  }
};