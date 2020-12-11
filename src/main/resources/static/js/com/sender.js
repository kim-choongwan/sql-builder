
const sender = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});


// dlrmagml tmxkdlffh rkf rjtdlsi 
sender.interceptors.request.use(
    function (config) {
    	if(console){
    		console.log('## request before ');
    		console.log(config);
    	}
        return config;
    }, 
    function (error) {
    	if(console){
    		console.log('## request error ');
    		console.log(error);
    	}
        return Promise.reject(error);
    }
);
sender.interceptors.response.use(
    function (response) {
		console.log('## response success ');
		console.log(response);
        return response;
    },

    function (error) {
		console.log('## response error ');
		console.log(error);
        return Promise.reject(error);
    }
);

export default sender;
