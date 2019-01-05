import axios from 'axios';


// axios.defaults.baseURL = 'https://vue-http-2ff89.firebaseio.com/';

// axios.defaults.headers.get['Accepts'] = 'application/json';

const instance = axios.create({
    baseURL: 'https://vue-http-2ff89.firebaseio.com/'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;