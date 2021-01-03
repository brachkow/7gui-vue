<template>
  <main>
    <!-- <label class="flex mb-4 leading-loose"
      >Filter prefix:
      <input
        class="bg-gray-200 leading-loose px-4 ml-4 rounded focus:outline-none flex-grow"
        type="text"
    /></label> -->
    <div class="bg-gray-200 leading-loose rounded mb-4" v-if="users.length > 0">
      <ul>
        <li v-for="user in users" :key="user.id">
          <button
            @click="selectItem(user.id)"
            class="w-full px-4 text-left focus:outline-none box-border rounded border-2 border-gray-200 focus:bg-gray-300"
            :class="selectedItem === user.id ? 'border-blue-600' : ''"
          >
            {{ user.name }}, {{ user.surname }}
          </button>
        </li>
      </ul>
    </div>
    <div class="flex mb-4 leading-loose">
      <label class="mr-4"
        >Name:
        <input
          class="bg-gray-200 leading-loose px-4 ml-4 rounded focus:outline-none"
          type="text"
          v-model="currentName"
      /></label>
      <label
        >Surname:
        <input
          class="bg-gray-200 leading-loose px-4 ml-4 rounded focus:outline-none"
          type="text"
          v-model="currentSurname"
      /></label>
    </div>
    <div class="flex leading-loose">
      <button
        class="bg-blue-600 text-white leading-loose px-4 rounded focus:outline-none hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 transition-colors mr-4"
        @click="createItem"
      >
        Create
      </button>
      <button
        class="bg-blue-600 text-white leading-loose px-4 rounded focus:outline-none hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 transition-colors mr-4"
        @click="updateItem(selectedItem)"
      >
        Update
      </button>
      <button
        class="bg-blue-600 text-white leading-loose px-4 rounded focus:outline-none hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 transition-colors"
        @click="deleteItem(selectedItem)"
      >
        Delete
      </button>
    </div>
  </main>
</template>

<script>
  class Item {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
      this.id = (Math.random() * 100000).toFixed(0);
    }
  }
  export default {
    data() {
      return {
        users: [
          {
            name: 'Will',
            surname: 'Smith',
            id: (Math.random() * 100000).toFixed(0),
          },
          {
            name: 'Ivan',
            surname: 'Ivanov',
            id: (Math.random() * 100000).toFixed(0),
          },
          {
            name: 'Yung',
            surname: 'Thug',
            id: (Math.random() * 100000).toFixed(0),
          },
        ],
        filteredData: [],
        currentName: '',
        currentSurname: '',
        selectedItem: null,
      };
    },
    methods: {
      createItem() {
        this.users.push(new Item(this.currentName, this.currentSurname));
      },
      updateItem(id) {
        this.users.forEach((user, index) => {
          if (user.id === id) {
            this.$set(this.users, index, {
              name: this.currentName,
              surname: this.currentSurname,
              id: user.id,
            });
          }
        });
      },
      deleteItem(id) {
        this.users.forEach((user, index) => {
          if (user.id === id) {
            this.users.splice(index, 1);
          }
        });
      },
      selectItem(id) {
        this.selectedItem = id;
        this.users.forEach((user) => {
          if (user.id === id) {
            this.currentName = user.name;
            this.currentSurname = user.surname;
          }
        });
      },
    },
  };
</script>
