import axios from 'axios';

axios.defaults.baseURL = 'https://633b19d1e02b9b64c61f05d3.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
