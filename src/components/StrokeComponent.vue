<script>
export default {
    props: {
        strokeElement: {
            type: Object,
            required: true
        },
        deleteStroke: {
            type: Function,
            required: true
        }
    },

}
</script>

<template>
    <tr>
        <th scope="row">{{ strokeElement.id }}</th>
        <td>{{ strokeElement.name }}</td>
        <td>{{ strokeElement.short_name }}</td>
        <td>{{ strokeElement.description }}</td>
        <td>{{ strokeElement.is_active }}</td>
        <td><a href="#" class="delete" @click="deleteStroke(strokeElement.id)">Delete</a></td>
    </tr>
</template>

<style scoped>
a {
    color: red;
    text-decoration: none;
    padding: 0;
    margin: 0;
    opacity: 60%;
}
</style>