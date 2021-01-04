<template>
    <div>
        <input type="text" v-model="msg">
        <button @click="add_note">发表留言</button>

        <ul>
            <li v-for="(value, index) in msg_list" :key="index">{{ value }}
                <a href="javascript:;" @click="delNote(index)">删除</a>
            </li>
        </ul>
        <span>总数量：{{ msg_list.length }}条</span>
    </div>
</template>

<script>
export default {
    name: "note",
    data() {
        return {
            msg: "",
            msg_list: localStorage.msg_list ? JSON.parse(localStorage.msg_list) : []
        }
    },
    methods: {
        add_note() {
            let msg = this.msg;
            if (msg) {
                this.msg_list.push(this.msg);
                localStorage.msg_list = JSON.stringify(this.msg_list);
                this.msg = "";
            }
        },
        delNote(index) {
            console.log(index);
            this.msg_list = JSON.parse(localStorage.msg_list);
            this.msg_list.splice(index,1)
            localStorage.msg_list = JSON.stringify(this.msg_list);

        }
    }
}
</script>

<style scoped>

</style>
