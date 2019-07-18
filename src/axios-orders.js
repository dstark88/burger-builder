import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-react-burger-build-6e42b.firebaseio.com/'
});

export default instance;