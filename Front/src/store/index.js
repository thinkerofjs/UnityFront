import { UnityFrontView } from "@/data"
export default {
    $t:"zh-cn",
    install:{
        sql:{
            dataBaseName:"unity_front",
            prefix:"uf_",
        },
    },
    CreateNewProjects:{
        project_name:null,
        project_id:null,
    },
    CreateNewProjectsView:{
        project_name:null,
        project_id:null,
    },
    UnityFrontView,
    ProjectGrid:[
        {name:"布局",icon:"&#xe627;",type:"layout",style:{fontSize:'34px'}},
        {name:"图片",icon:"&#xe674;",type:"images",style:{fontSize:'28px'}},
        {name:"文字",icon:"&#xe69b;",type:"text"},
        {name:"矩形",icon:"&#xe6aa;",type:"rect"},
        {name:"星型",icon:"&#xe61b;",type:"svg",path:`
            <path d="M957.111079 403.480424c-3.927449-11.669784-14.447037-19.86442-26.723641-20.816095L647.68068 360.749204 540.183388 84.126003c-4.586458-11.803837-15.951297-19.579941-28.614711-19.579941s-24.02723 7.776104-28.614711 19.579941L375.458719 360.749204l-282.708803 21.915126c-12.276604 0.951675-22.796192 9.146311-26.723641 20.816095-3.927449 11.669784-0.50142 24.557302 8.701173 32.737612l217.547735 193.358823-67.980277 291.298436c-2.848884 12.20702 2.009773 24.919553 12.273535 32.114418 10.264784 7.195889 23.87271 7.42818 34.375925 0.586354l240.624313-156.709111 240.625336 156.709111c5.099135 3.320629 10.92891 4.974291 16.752546 4.974291 6.173606 0 12.342096-1.858324 17.623379-5.561669 10.263761-7.194866 15.122419-19.907399 12.273535-32.114418l-67.980277-291.299459L948.409906 436.218036C957.613522 428.037726 961.037505 415.150208 957.111079 403.480424z" p-id="13818" data-spm-anchor-id="a313x.7781069.0.i3"></path>
        `},
        {name:"三角形",icon:"&#xe651;",type:"svg",path:`
            <path d="M71.675 893.33l440.325-762.683 440.325 762.683z" p-id="13955" data-spm-anchor-id="a313x.7781069.0.i5"></path>
        `},
        {name:"渐变线",type:"material",mapName:"line",icon:"<hr>"},
        {name:"角线",type:"material",mapName:"HornyLine",icon:"<hr>"},
    ]
}
