import { BaseHttpClient } from "./BaseHttpClient";

class TrefleHttpClient extends BaseHttpClient {
    constructor() {
        super('htpps://trefle.io/api');
    }

    public async getDetails(params:type) {
        
    }

}

export default new TrefleHttpClient();