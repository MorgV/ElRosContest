<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            fields: ref(this.fieldsArray)
        }
    },
    props: {
        fieldsArray: {
            type: Array,
            required: true
        },
        filter: {
            type: Function,
            required: true
        },
        deleteStroke: {
            type: Function,
            required: true
        },
        organization: {
            type: Array,
            required: true
        },
    },

};
</script>

<template>
    <div class="table">
        <b-table :items="organization" :fields="fields" striped hover bordered @sort-changed="filter">
            <template #cell(actions)="row">
                <div class="d-flex justify-content-center">
                    <b-button @click="deleteStroke(row.item.id)" variant="danger">Удалить</b-button>
                </div>
            </template>
        </b-table>
    </div>
</template>

<style scoped>
.table {
    max-height: 580px;
    overflow-y: auto;
}
</style>