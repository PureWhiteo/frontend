
var projectName = '小学生英文绘本网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [
  {
    name: '个人信息',
    url: '../' + localStorage.getItem('userTable') + '/center.html'
  }, 
  {
    name: '考试记录',
    url: '../examrecord/list.html'
  }, 
  {
    name: '错题本',
    url: '../examrecord/wrong.html'
  },
  {
    name: '我的收藏',
    url: '../storeup/list.html'
  },
  {
    name: '阅读打卡',
    url: '../yuedudaka/list.html'
  }
]


var indexNav = [

{
	name: '绘本阅读',
	url: './pages/huibenyuedu/list.html'
}, 

{
	name: '试卷',
	url: './pages/exampaper/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8081/";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"绘本类型","menuJump":"列表","tableName":"huibenleixing"}],"menu":"绘本类型管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除","查看评论"],"menu":"绘本阅读","menuJump":"列表","tableName":"huibenyuedu"}],"menu":"绘本阅读管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"阅读打卡","menuJump":"列表","tableName":"yuedudaka"}],"menu":"阅读打卡管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"},{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"试卷列表","tableName":"exampaperlist"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","阅读打卡"],"menu":"绘本阅读列表","menuJump":"列表","tableName":"huibenyuedu"}],"menu":"绘本阅读模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","报表"],"menu":"阅读打卡","menuJump":"列表","tableName":"yuedudaka"}],"menu":"阅读打卡管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","删除"],"menu":"考试记录","tableName":"examrecord"},{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","阅读打卡"],"menu":"绘本阅读列表","menuJump":"列表","tableName":"huibenyuedu"}],"menu":"绘本阅读模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
