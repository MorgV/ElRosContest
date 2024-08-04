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
const filter = (col) => {
    if (col == 'id') {
        rootStore.filteredColumn1 = !rootStore.filteredColumn1
        if (rootStore.filteredColumn1) {
            rootStore.getOrganization(undefined, undefined, '-id')
        } else {
            rootStore.getOrganization(undefined, undefined, 'id')
        }
    }
    if (col == 'name') {
        rootStore.filteredColumn2 = !rootStore.filteredColumn2
        if (rootStore.filteredColumn2) {
            rootStore.getOrganization(undefined, undefined, '-name')
        } else {
            rootStore.getOrganization(undefined, undefined, 'name')
        }
    }
    if (col == 'short_name') {
        rootStore.filteredColumn3 = !rootStore.filteredColumn3
        if (rootStore.filteredColumn3) {
            rootStore.getOrganization(undefined, undefined, '-short_name')
        } else {
            rootStore.getOrganization(undefined, undefined, 'short_name')
        }
    }
    if (col == 'description') {
        rootStore.filteredColumn4 = !rootStore.filteredColumn4
        if (rootStore.filteredColumn4) {
            rootStore.getOrganization(undefined, undefined, '-description')
        } else {
            rootStore.getOrganization(undefined, undefined, 'description')
        }
    }
    if (col == 'is_active') {
        rootStore.filteredColumn5 = !rootStore.filteredColumn5
        if (rootStore.filteredColumn5) {
            rootStore.getOrganization(undefined, undefined, '-is_active')
        } else {
            rootStore.getOrganization(undefined, undefined, 'is_active')
        }
    }
}   
</script>

<template>
    <div class="wrapper">
        <img class="bage" />
        <div class="button">
            <button type="button" class="btn btn-success" @click="route">Добавить</button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th @click="filter('id')" scope="col">id
                        <div :class="{ 'active': rootStore.filteredColumn1 }" class="bage"></div>
                    </th>
                    <th @click="filter('name')" scope="col">Полное
                        название<div :class="{ 'active': rootStore.filteredColumn2 }" class="bage"></div>
                    </th>
                    <th @click="filter('short_name')" scope="col">
                        Короткое название<div :class="{ 'active': rootStore.filteredColumn3 }" class="bage"></div>
                    </th>
                    <th @click="filter('description')" scope="col">
                        Описание<div :class="{ 'active': rootStore.filteredColumn4 }" class="bage"></div>
                    </th>
                    <th @click="filter('is_active')" scope="col">
                        Активен<div :class="{ 'active': rootStore.filteredColumn5 }" class="bage"></div>
                    </th>
                    <th scope="col">
                    </th>
                </tr>
            </thead>
            <tbody>
                <StrokeComponent :key="el.id" v-for="el in rootStore.organization" :strokeElement="el"
                    :deleteStroke="deleteStroke" />
            </tbody>
        </table>
        <div class="pagination">
            <select id="selector" @change="rootStore.getOrganization(1, $event.target.value)" class="form-select"
                aria-label="Default select example">
                <option value="1">1</option>
                <option selected value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li v-for="el in rootStore.page_count" :key="el" class="page-item">
                        <a @click="rootStore.getOrganization(el)" class="page-link" href="#">{{ el }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0
}

th {
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    padding: 0 100px 0 0;
    position: relative;
}

th:hover {
    background-color: #CFCFCF;
}

.bage {
    position: absolute;
    right: -5px;
    top: 15px;
}

.active {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 31px;
    background-repeat: no-repeat;
    rotate: 180deg;
    z-index: 10;
}

.bage::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 21px;
    height: 21px;
    background-image: url('../assets/arr.svg');
    background-repeat: no-repeat;
    rotate: 90deg;
    z-index: 10;
}

.form-select {
    width: 70px;
}

.pagination {
    display: flex;
    justify-content: space-between;
    max-height: 40px;

}

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