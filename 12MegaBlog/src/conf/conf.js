const conf = {

    APPWRITEURL: String(import.meta.env.VITE_APPWRITE_URL),
    APPWRITEPROJECTID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    APPWRITEDATABASEID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    APPWRITETABLEID: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    APPWRITEBUCKETID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default conf