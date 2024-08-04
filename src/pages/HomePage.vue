<script setup>
import StrokeComponent from '../components/StrokeComponent';
import { useRootStore } from '../stores/root.js'
import router from '@/router/index.js';
const rootStore = useRootStore()
rootStore.getOrganization()
const deleteStroke = (id) => {
    rootStore.deleteOrganization(id)
}
const route = () => {
    router.push({ path: '/newOrganization' })
}
</script>

<template>
    <div class="wrapper">
        <div class="button"><button type="button" class="btn btn-success" @click="route">Добавить</button></div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Полное название</th>
                    <th scope="col">Короткое название</th>
                    <th scope="col">Описание</th>
                    <th scope="col">Активен</th>
                    <th scope="col">
                    </th>
                </tr>
            </thead>
            <tbody>
                <StrokeComponent :key="el.id" v-for="el in rootStore.organization" :strokeElement="el"
                    :deleteStroke="deleteStroke" />
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.wrapper {
    margin: 5% 10%;
    padding: 40px;
    border-radius: 4%;
    background-color: #BDECB6;
    color: #1C231B;
    -webkit-box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
}

.button {
    margin-bottom: 10px;
    display: flex;
    justify-content: end;
}
</style>