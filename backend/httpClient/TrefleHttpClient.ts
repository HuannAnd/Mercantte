import { BaseHttpClient } from "./BaseHttpClient";

class TrefleHttpClient extends BaseHttpClient {
    constructor() {
        super('https://trefle.io/api');
    }

}

export default new TrefleHttpClient();