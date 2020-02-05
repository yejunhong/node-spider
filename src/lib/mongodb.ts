import { MongoClient } from 'mongodb';

const clientUrl = "mongodb://localhost:27017/test";

export let mongodbClient: MongoClient;

export async function ClientConnect() {
    try {
        mongodbClient = await MongoClient.connect(clientUrl, { useNewUrlParser: true });
        console.log(mongodbClient)
    } catch (e) {
        console.log(e.name, e.message)
    }
}

/**
 * 检测mongo连接情况
 */
export function Check() {
    if (mongodbClient) {
        return mongodbClient.isConnected();
    }
    return false;
}

export function Create() {

}

export function Find() {

}

export function Select() {

}

export function Delete() {

}

export function Update() {

}