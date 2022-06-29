<template>
  <div class="address">
    <h1>地址查询</h1>
    <el-input v-model="queryParams.address" placeholder="请输入要查询的地址" clearable style="width: 35%;margin: 20px;"/>
    <el-button style="margin: 5px;" type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
    <div style="margin-top: 50px">
      <el-table :data="list" stripe fit border>
        <el-table-column prop="province" label="省" align="center"></el-table-column>
        <el-table-column prop="city" label="市" align="center"></el-table-column>
        <el-table-column prop="distinct" label="区" align="center"></el-table-column>
        <el-table-column prop="address" label="具体地址" align="center"></el-table-column>
        <el-table-column prop="longitude" label="经度" align="center"></el-table-column>
        <el-table-column prop="latitude" label="维度" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import {searchAddress} from "@/api/address";

export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
      queryParams: {
        address: null
      }
    }
  },
  methods: {
    getList() {
      searchAddress(this.queryParams.address).then(res => {
        this.list.push(res.data)
      })

      // axios.get('http://localhost:9527/address-explode/' + this.queryParams.address).then(res => {
      //   this.list.push(res.data)
      // })
    },
  }
}
</script>

<style scoped>

</style>
