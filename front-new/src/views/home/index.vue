<template>
  <div class="page page-home">
    <div class="book-wrapper">
      <div class="filter-menu-box">
        <!-- <div class="menu-title">Math</div> -->
        <div
          v-for="(item, index) in typeList"
          :key="index"
          class="menu-item"
          :class="item.value"
        >
          <span>{{ item.label }}</span>
          <img :src="require(`@/assets/img/${item.value}.png`)" alt="">
        </div>
      </div>
      <div class="book-items-box">
        <div
          v-for="(item, index) in bookList"
          :key="index"
          class="book-item"
          :class="item.value"
        >
          <img :src="$imgBase + item.fengmian" alt="">
          <div class="book-info">
            <div class="title">{{ item.huibenmingcheng }}</div>
            <div class="tag-info">
              <div class="tag">{{ item.huibenleixing }}</div>
              <div class="fans"><i class="el-icon-star-off"></i> 99</div>
            </div>
            <div class="auther">
              <i class="el-icon-picture-outline-round"></i> <span>{{ item.zuozhe }}</span>
            </div>
          </div>
        </div>
        <!-- end -->
      </div>
    </div>
    <!-- wrapper end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: [],
      bookList: [],
      params: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getTypeList()
    this.getBookList()
  },
  methods: {
    async getTypeList() {
      const res = await this.$http({
        method: 'get',
        url: 'option/huibenleixing/huibenleixing'
      });
      if (res.data?.length) {
        this.typeList = Array.from(res.data, t => {
          const dic = {
            '一年级': 'grade-1',
            '二年级': 'grade-2',
            '三年级': 'grade-3',
            '四年级': 'grade-4',
            '五年级': 'grade-5',
            '六年级': 'grade-6',
          };
          return { label: t, value: dic[t] };
        });
      }
    },
    async getBookList() {
      const res = await this.$http({
        method: 'get',
        url: 'huibenyuedu/list',
        data: this.params
      });
      if (!res.data?.list?.length) return;
      this.bookList = res.data.list;
    }
  }
};
</script>

<style lang="scss">
.page-home {
  padding: 80px 30px;

  .book-wrapper {
    display: flex;
    height: 100%;
  }

  .filter-menu-box {
    width: 310px;
    height: 100%;
    padding: 15px 25px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    background: rgb(155, 214, 255);
  }

  .filter-menu-box::-webkit-scrollbar {
    display: none;
    background: transparent;
  }

  .menu-title {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    padding-top: 5px;
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    height: 90px;
    padding: 10px;
    color: #fff;
    font-size: 23px;
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid #67C23A;
    // background: linear-gradient(180deg, #67C23A 0%, rgba(0, 204, 254, 1) 100%);
    background: #67C23A;
    margin-top: 60px;
    position: relative;
    cursor: pointer;
  }

  .menu-item span {
    align-self: center;
  }

  .menu-item img {
    width: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .book-items-box {
    flex: 1;
    padding: 20px;
    padding-right: 0;
    margin-left: 20px;
    margin-right: -10px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    background: rgb(155, 214, 255);
  }

  .book-item {
    display: inline-block;
    width: 180px;
    height: 288px;
    margin-right: 20px;
    margin-bottom: 12px;
    border-radius: 6px;
    overflow: hidden;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  .book-item:hover {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .4s;
    // box-shadow: 2px 3px 5px rgba(0, 0, 0, .3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .book-item img {
    width: 100%;
    height: 190px;
    // margin: 5px 0;
  }

  .book-item .book-info {
    padding: 0 8px;
  }

  .book-item .title {
    color: #212b34;
    font-weight: bold;
    padding: 8px 0;
  }

  .book-item .tag-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
  }

  .book-item .tag {
    display: inline-block;
    padding: 2px 5px;
    color: #87959f;
    font-size: 12px;
    border-radius: 4px;
    background: rgb(246, 248, 250);
  }
  
  .book-item .fans {
    color: rgb(238, 105, 42);
    font-size: 12px;    
  }

  .book-item .fans i {
    font-size: 14px;
  }

  .book-item .auther {
    color: #525a67;
    border-top: 1px solid #f6f8fa;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .book-item .auther i {
    font-size: 18px;
    margin-right: 8px;
  }

  .book-item .auther span {
    font-size: 12px;
  }
}
</style>