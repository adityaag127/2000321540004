import axios from 'axios';

export const getTrains = async () => {
  const response = await axios.get('https://api.johndoerailways.com/trains');
  return response.data;
};

export const getTrain = async (trainId) => {
  const response = await axios.get(`https://api.johndoerailways.com/trains/${trainId}`);
  return response.data;
};