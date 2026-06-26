import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.APPWRITEURL)
            .setProject(conf.APPWRITEPROJECTID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.APPWRITEDATABASEID,
                conf.APPWRITETABLEID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createpost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.databases.updateDocument(
                conf.APPWRITEDATABASEID,
                conf.APPWRITETABLEID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.APPWRITEDATABASEID,
                conf.APPWRITETABLEID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error", error);
            return false

        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.APPWRITEDATABASEID,
                conf.APPWRITETABLEID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getpost :: error", error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITEDATABASEID,
                conf.APPWRITETABLEID,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getposts :: error", error);
            return false
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.APPWRITEBUCKETID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.APPWRITEBUCKETID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.APPWRITEBUCKETID,
            fileId
        )
    }
}


const service = new Service()
export default Service