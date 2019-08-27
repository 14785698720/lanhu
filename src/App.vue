<template>
  <div id="app">
    <div class="nav">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="top">
              <font color="#FFFFFF">区块链</font>
            </div>
            <div class="photo">
              <img src="./assets/photo.jpeg" width="28" height="28" />
            </div>
            <div class="top2">超级管理员 &nbsp;| &nbsp;修改密码&nbsp; | &nbsp;</div>
            <div class="top3">
              <el-row>
                <el-button type="danger" size="small" icon="el-icon-error" circle></el-button>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="left">
      <el-row>
        <el-col :span="5">
          <div class="left-content bg-white">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <!--<span slot="title">平台核心数据</span>-->
                    <router-link to="/">平台核心数据</router-link>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-s-claim"></i>
                    <!-- <span slot="title">提币审核</span>-->
                    <router-link to="/Examine">提币审核</router-link>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">用户管理</span>
                  </el-menu-item>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-s-goods"></i>
                      <span>交易相关</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-s-operation"></i>
                      <span>参数设置</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="6">
                    <template slot="title">
                      <i class="el-icon-s-tools"></i>
                      <span>权限设置</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="7">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">工单中心</span>
                  </el-menu-item>
                  <el-submenu index="8">
                    <template slot="title">
                      <i class="el-icon-search"></i>
                      <span>Fabric链查询</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="19">
          <div class="right-content bg-purple-light">
            <!--<div id="right" style="height: 135px; width:1025px;margin: 0 auto; border: 0px dashed white;background: white;"> -->
            <router-view />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
}
.el-row {
  margin-bottom: 2px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.left-content {
  border-radius: 4px;
  min-height: 573px;
}
.right-content {
  border-radius: 4px;
  min-height: 573px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.box {
  //  width: 300px;
  //  height: 150px;

  text-align: center;
  padding-top: 50px;
}

.wz {
  text-align: center;
}

.top {
  position: absolute;
  top: 25%;
  left: 2%;
}

.top2 {
  position: absolute;
  top: 25%;
  right: 6%;
}

.top3 {
  position: absolute;
  top: 3%;
  right: 2%;
}

.photo {
  position: absolute;
  top: 17%;
  right: 22%;
}
</style>
