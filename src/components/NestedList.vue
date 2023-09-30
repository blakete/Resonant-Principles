<template>
    <ol>
        <li v-for="item in filteredItems" :key="item.id">
            <router-link v-if="item.clickable" :to="{ name: item.label }">{{ item.label }}</router-link>
            {{ !item.clickable ? item.label : '' }}
            <NestedList v-if="hasChildren(item.id)" :items="items" :parentId="item.id"></NestedList>
        </li>
    </ol>
</template>
  
<script>
export default {
    name: 'NestedList',
    props: {
        items: Array,
        parentId: {
            type: Number,
            default: null
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => item.parent_id === this.parentId);
        }
    },
    methods: {
        hasChildren(id) {
            return this.items.some(item => item.parent_id === id);
        }
    }
}
</script>
  