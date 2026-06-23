import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITEURL)
            .setProject(conf.APPWRITEPROJECTID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password
            })
            if (userAccount) {
                //call another method
                return this.login({ email, password });
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {

        try {
            return await this.account.createEmailPasswordSession({ email, password })
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getcurrentuser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService