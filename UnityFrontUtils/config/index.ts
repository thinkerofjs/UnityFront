const path = require("path");
import {
    mysqlOptions,
    ServerOptions
} from "../typeStript";

//数据库配置
export const mysqlConfig = <mysqlOptions>{
    createPool:{},
    options:{
        connectionLimit : 10,
        host: 'localhost',
        user: 'root',
        password: 'admin123',
        port: '3306',
        database: 'test'
    }
};

//服务设置
export const ServerConfig =  <ServerOptions>{
    port:3000,
    fsWatch:[
        //listen UnityFrontUtils directory
        {path:path.resolve(__dirname,"../"),type:"directory"},
        //listen application directory
        {path:path.resolve(__dirname,"../../application"),type:"directory"},
    ],
    RequestStatus:200,
    headers:{
        'Content-Type': 'text/json; charset=utf-8',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods':'GET',
        // 'Access-Control-Allow-Headers':'content-type',
        // 'Access-Control-Max-Age':0,//预请求缓存20天
    },
    Template:{
        viewsPath:path.resolve(__dirname,"../../views"),
        applicationPath:path.resolve(__dirname,"../../application"),
        TemplatePath:path.resolve(__dirname,"../Template"),
        TemplateErrorPath:path.resolve(__dirname,"../Template/TemplateError.html"),
        ErrorPathSource:path.resolve(__dirname,"../controller/applicationController.js"),
        suffix:".html",
        urlVars:{
            "__STATIC__":"/public/static",
            "__PUBLIC__":"/public",
        }
    }
};
