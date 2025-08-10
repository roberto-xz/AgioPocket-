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

    dev_createFakeClients(): boolean {
        return this.clientDao.dev_insertFakeClients();
    }

    update(client: ClientModel): boolean {
        return this.clientDao.update(client);
    }

    selectAll():ClientModel[] | null {
        return this.clientDao.selectAll();
    }

    selectById(id:number):ClientModel | null {
        return this.clientDao.selectById(id);
    }

    remove(id: number): boolean {
        if (id)
            return this.clientDao.remove(id);
        return false;
    }

    search(term:string):ClientModel[] | null {
        return this.clientDao.searchClients(term);
    }

}
