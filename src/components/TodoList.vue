<template>
    <div class="wrapper">
        <header>Todo List</header>
        <main>
            <b-field
                grouped
                type="is-success"
            >
                <b-input
                    v-model="task"
                    maxlength="30"
                />
                <button
                    class="button is-primary"
                    @click="addNewTask"
                >Add new Task!</button>
            </b-field>
            <ul>
                <li
                    v-for="(item, index) of taskList"
                    :key="index"
                >
                    {{ item }}
                </li>
            </ul>
        </main>
        <b-loading
            :is-full-page="isFullPage"
            :active.sync="isLoading"
            :can-cancel="true"
        />
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'TodoList',
    data: function() {
        return {
            task: '',
            taskList: [],
            isLoading: false,
            isFullPage: true
        }
    },
    methods: {
        addNewTask: function() {
            if (this.task != "") {
                this.isLoading = true
                let self = this
                let promise = [
                    axios.get('https://jsonplaceholder.typicode.com/todos'),
                    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                ]

                Promise.all(promise).then(function () {
                    self.taskList.push(self.task)
                    self.task = ""
                    self.isLoading = false
                    //console.log(result)
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper{
    width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    & > header {
        font-size: 1.8em;
        text-align: left;
        color: #000;
    }
    & > main {
        text-align: left;

        button, button:hover {
            background-color: #7957d5;
            border-color: transparent;
            color: #fff;
        }
        li {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0 10px;
        }
    }
}
</style>


