const base = {
    get() {
        return {
            url : "http://localhost:8080/huiben/",
            name: "huiben",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/'
        };
    },
    getProjectName(){
        return {
            projectName: "小学生英文绘本网站"
        } 
    }
}
export default base
