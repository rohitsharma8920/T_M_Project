import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

// export const API_URL = 'https://t-m-project-api.vercel.app/';
export const API_URL = 'http://localhost:3000';


// export const API_URL = 'https://mern-task-manager-app-deploy-api.vercel.app';
