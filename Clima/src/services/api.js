"/BR?token=b60401574355a1dea89336e97f07a68d"
import axios from "axios";

const api = axios.create({
    baseURL: 'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale'
});

//Climate
//"http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=your-app-token"
//Temperature
// "http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/3477?token=your-app-token"
//Toke:
// b60401574355a1dea89336e97f07a68d
export default api;