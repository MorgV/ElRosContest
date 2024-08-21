<script setup>
import { useRootStore } from '../stores/root.js'
import router from '@/router/index.js';
import PaginationComponent from '@/components/PaginationComponent.vue';
import TableComponent from '@/components/TableComponent.vue';

const rootStore = useRootStore()
rootStore.getOrganization()

const deleteStroke = (id) => {
    rootStore.deleteOrganization(id)
}
const route = () => {
    router.push({ path: '/newOrganization' })
}
const filter = (col) => {
    let sortBy = col.sortBy
    if (col.sortDesc) {
        sortBy = `-${col.sortBy}`
    }
    rootStore.getOrganization(undefined, undefined, sortBy)
    console.log(sortBy)
}
const changePage = (page) => {
    rootStore.getOrganization(page)
}
const changeSelect = (select) => {
    rootStore.getOrganization(undefined, select)
}

const fields = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Полное наименование', sortable: true },
    { key: 'short_name', label: 'Краткое наименование', sortable: true },
    { key: 'description', label: 'Описание', sortable: true },
    { key: 'is_active', label: 'Активность', sortable: true },
    { key: 'actions', label: '' }
];

</script>

<template>
    <div class="wrapper">
        <div class="buttons">
            <button type="button" class="btn btn-success" @click="route">Добавить</button>
        </div>
        <TableComponent :organization="rootStore.organization" :fieldsArray="fields" :filter="filter"
            :deleteStroke="deleteStroke" />
        <PaginationComponent :page_size="rootStore.params.page_size" :options="[1, 5, 10, 15]"
            :page="rootStore.params.page" :data_count="rootStore.data_count" :change-page="changePage"
            :change-select="changeSelect" :is_submit="rootStore.is_submit" />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0
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

.buttons {
    margin-bottom: 10px;
    display: flex;
    justify-content: end;
}
</style>