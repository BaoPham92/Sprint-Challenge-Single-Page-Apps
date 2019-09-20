import axios from 'axios';

class get {

    // ? MANAGEMENT FOR HANDLING API REQ.

    // * API CALL FOR PEOPLE
    static main () {
        return axios.get(`https://rickandmortyapi.com/api/character/`)
    }

    // ! BACK API CALL
    static backup () {
        return axios.get(`https://rick-api.herokuapp.com/api/character/`)
    }
}

// * EXPORTED API SHORTHANDS
export default class API {

    // * MAIN CALL
    static main() {
        return get.main()
    }

    // ! BACKUP CALL
    static backup() {
        return get.backup()
    }
}