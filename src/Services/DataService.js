import { PublicAxios } from "./AxiosHandler"

class DataService {
    static  endPoint = "categories/all"
    static getAll(){
        return PublicAxios.get(`${DataService.endPoint}`)
    }
}
export default DataService;