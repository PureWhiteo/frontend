const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1144o/",
            name: "springboot1144o",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1144o/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小学生英文绘本网站"
        } 
    }
}
export default base
