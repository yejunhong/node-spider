import Koa from 'koa';
// import cluster from 'cluster';
import os from 'os';
import { Cors, Router } from './router';
import { mongodbClientConnect } from './lib/mongodb';

// const cpuCount = os.cpus().length;
const app = new Koa();

mongodbClientConnect();

// 设置跨域请求
app.use(Cors);

// 设置路由
app.use(Router.routes());
app.use(Router.allowedMethods());

app.on('error', (err: any) => {
    console.log('server error', err);
});

/*
if (cluster.isMaster) { //主进程
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
    cluster.on('listening', function (worker, address) {
        console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
    });
} else { //子进程,会被调用numCPUs次
    console.log('server port 4000 线程:', cluster.worker.id);
    app.listen(4000);
}*/
const interfaces = os.networkInterfaces();
console.log(`http://${interfaces["eth0"][0]["address"]}:4000`)
app.listen(4000);