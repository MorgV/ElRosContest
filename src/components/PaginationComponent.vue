<script>
export default {
    props: {
        page_size: {
            type: Number,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        page: {
            type: Number,
            required: true
        },
        data_count: {
            type: Number,
            required: true
        },
        changeSelect: {
            type: Function,
            required: true
        },
        changePage: {
            type: Function,
            required: true
        },
        is_submit: {
            type: Boolean,
            required: true
        }
    },

};
</script>

<template>
    <div class="pagination">
        <b-form-text>Кол-во на странице</b-form-text>

        <b-form-select :value="page_size" @change="changeSelect" :options="options" size="sm"
            class="form-select"></b-form-select>
        <b-form-text>{{ `${page} из ${Math.ceil(data_count /
            page_size)}`
            }}</b-form-text>
        <transition name="fade">
            <b-pagination v-if="is_submit" first-number last-number :value="page" @change="changePage"
                :total-rows="data_count" :per-page="page_size"></b-pagination>
        </transition>
    </div>
</template>

<style>
.pagination {
    justify-content: space-between;
    max-height: 40px;
}

.form-select {
    max-width: 70px;
}

.fade-enter-active {
    transition: opacity .9s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>