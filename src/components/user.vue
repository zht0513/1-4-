<template>
    <div>
        <table border="2px">
            <tr>
                <td v-for="(user,index) in user_list[user1]" :key="index">{{ user }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "user",
    data() {
        return {
            user_list: [
                {id: 1, name: '小黑', age: 12, bir: '2020-02-12', salary: '2000', msg: '我是python大神'},
                {id: 2, name: '小白', age: 22, bir: '2020-03-12', salary: '2000', msg: '我是python大神'},
                {id: 3, name: '小绿', age: 32, bir: '2020-04-12', salary: '2000', msg: '我是python大神'},
                {id: 4, name: '小红', age: 42, bir: '2020-05-12', salary: '2000', msg: '我是python大神'},
            ],
            user1:this.$route.query.id
        }
    }
}
</script>

<style scoped>

</style>
