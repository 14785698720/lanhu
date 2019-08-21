<template>
<div id="Examine">
    <div>当前位置>提币审核</div>
    <div id="right" style="height: 135px; width:1025px;margin: 2px auto; border: 0px dashed white;background: white;">
   <div class="block">
    <span class="demonstration">提币申请日期:</span>&nbsp;&nbsp;
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  
  <div>
    <br>
    <br>
    <br>
    <br>
       &nbsp;&nbsp;&nbsp;热钱包剩余金额： 2521TRX/1254ABC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       是否异常：  
       <el-radio v-model="radio" label="1">正常</el-radio>
  <el-radio v-model="radio" label="2">异常</el-radio>

    &nbsp;&nbsp;&nbsp;币种： 
    <el-radio v-model="radio" label="1">RTX</el-radio>
  <el-radio v-model="radio" label="2">ABC</el-radio>
        <el-button type="primary">筛选</el-button>

    
</div>
    </div>
    <br>

    <div id="right" style="height: 420px; width:1025px; margin: 0 auto; border: 0px dashed white;background: white;">
    
     <el-table 
    :data="tableData"
    height="250"
    stripe
    border
    style="width: 100%; bgcolor:#336699;">
     <el-table-column
      fixed
      prop="id"
      label="用户ID"
      width="100">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="提币申请日期"
      width="120">
    </el-table-column>
    <el-table-column
      fixed
      prop="amount"
      label="提币金额"
      width="100">
    </el-table-column>
    <el-table-column
     fixed
      prop="kind"
      label="币种"
      width="100">
    </el-table-column>
    <el-table-column
     fixed
      prop="address"
      label="提币地址"
      width="150">
    </el-table-column>
    <el-table-column
     fixed
      prop="inflow"
      label="净流入"
      width="100">
    </el-table-column>
    <el-table-column
     fixed
      prop="Proportion"
      label="提币比例"
      width="110">
    </el-table-column>
     <el-table-column
      fixed
      prop="normal"

      label="是否正常"
      width="110">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="审核"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">通过</el-button>
        <el-button type="text" size="small"><span style="color:red">不通过</span></el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</div>

</template>


<script>
export default {
    name: "Examine",
  components: {},
data() {
      return {
          
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
         radio: '1',
         
           methods: {
      handleClick(row) {
        console.log(row);
      }
    },
 tableData: [{
          id: '1001',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
        }, {
            id: '1002',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
        }, {
           id: '1003',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
        }, {
           id: '1004',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '200%',
          normal: '异常'
           }, {
            id: '1005',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
           }, {
           id: '1006',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
           }, {
            id: '1007',
          date: '2019/08/20',
          amount: '1000',
          kind: 'TRX',
          address: 'http://123456789',
          inflow: '3000',
         Proportion: '33.33%',
          normal: '正常'
        }]
      };
    }
  };
</script>


<style lang="scss" scoped>
.block {
  position: absolute;
  top: 8%;
  left: 25%;
}


</style>