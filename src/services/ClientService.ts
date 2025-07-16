import ClientDao from "../daos/ClientDao";
import ClientModel from "../models/ClientModel";

export default class ClientService {
    private clientDao: ClientDao;

    constructor() {
        this.clientDao = new ClientDao();
    }

    create(client: ClientModel): boolean {
        return this.clientDao.insert(client);
    }

    selectAll():ClientModel[] | null {
        return this.clientDao.selectAll();
    }
}
