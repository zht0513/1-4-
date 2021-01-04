<template>
    <div>
        <h3>用户管理</h3>
        <table border="1px">
            <tr>
                <td>id</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in user_list" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.msg }}</td>
                <td>
                    <button @click="first1(index)">查看用户详情</button>
                    <button @click="deluser(index)">删除</button>
                </td>
            </tr>
        </table>
    </div>

</template>

<script>
export default {
    name: "first",
    data() {
        return {
            user_list: [
                {id: 1, name: '小黑', age: 12, msg: '我是python大神'},
                {id: 2, name: '小白', age: 22, msg: '我是python大神'},
                {id: 3, name: '小绿', age: 32, msg: '我是python大神'},
                {id: 4, name: '小红', age: 42, msg: '我是python大神'},
            ]
        }
    },
    methods:{
        first1(index){
            this.$router.push('/user?id=' + index)
        },
        deluser(index){
            this.user_list.splice(index,1)
        },
    }
}
</script>

<style scoped>
h3 {
    color: red;
}
</style>


