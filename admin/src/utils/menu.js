const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }],
                "menu": "用户管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-discover",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "绘本类型",
                    "menuJump": "列表",
                    "tableName": "huibenleixing"
                }],
                "menu": "绘本类型管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "绘本阅读",
                    "menuJump": "列表",
                    "tableName": "huibenyuedu"
                }],
                "menu": "绘本阅读管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-rank",
                    "buttons": ["查看", "删除"],
                    "menu": "阅读打卡",
                    "menuJump": "列表",
                    "tableName": "yuedudaka"
                }],
                "menu": "阅读打卡管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-copy",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "小测验管理",
                    "tableName": "exampaper"
                }],
                "menu": "小测验管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "试题管理",
                    "tableName": "examquestion"
                }],
                "menu": "试题管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-goods",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }],
                "menu": "系统管理"
            }, {
                "child": [
                    {
                        "appFrontIcon": "cuIcon-keyboard",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "考试记录",
                        "tableName": "examrecord"
                    }, {
                        "appFrontIcon": "cuIcon-skin",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "错题本",
                        "tableName": "examfailrecord"
                    },
                    // {
                    //     "appFrontIcon": "cuIcon-baby",
                    //     "buttons": ["新增", "查看", "修改", "删除"],
                    //     "menu": "小测验列表",
                    //     "tableName": "exampaperlist"
                    // }
                ],
                "menu": "考试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看", "阅读打卡"],
                    "menu": "绘本阅读列表",
                    "menuJump": "列表",
                    "tableName": "huibenyuedu"
                }],
                "menu": "绘本阅读模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-rank",
                    "buttons": ["查看", "报表"],
                    "menu": "阅读打卡",
                    "menuJump": "列表",
                    "tableName": "yuedudaka"
                }],
                "menu": "阅读打卡管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-favor",
                    "buttons": ["查看", "删除"],
                    "menu": "我的收藏管理",
                    "tableName": "storeup"
                }],
                "menu": "我的收藏管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-keyboard",
                    "buttons": ["查看", "删除"],
                    "menu": "考试记录",
                    "tableName": "examrecord"
                }, {
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看", "删除"],
                    "menu": "错题本",
                    "tableName": "examfailrecord"
                }],
                "menu": "考试管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看", "阅读打卡"],
                    "menu": "绘本阅读列表",
                    "menuJump": "列表",
                    "tableName": "huibenyuedu"
                }],
                "menu": "绘本阅读模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }]
    }
}
export default menu;