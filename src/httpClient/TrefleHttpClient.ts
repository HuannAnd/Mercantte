import { BaseHttpClient } from "./BaseHttpClient";

class TrefleHttpClient extends BaseHttpClient {
    constructor() {
        super('htpps://trefle.io/api');
    }

}

export default new TrefleHttpClient();