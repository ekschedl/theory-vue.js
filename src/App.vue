<template>
  <div>
    <h1>Lesson 4: {{ title }}</h1>
    <ul>
      <list-item :text="posts[0].text" :icon="posts[0].icon" />

      <list-item :text="posts[1].text" :icon="posts[1].icon" />

      <list-item :text="posts[2].text" :icon="posts[2].icon" />
    </ul>
    <span class="total"> Total: {{ totalCount }} </span>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  components: { ListItem },
  data() {
    return {
      title: "Data, Computed",
      posts: [
        {
          id: 0,
          text: "Text first ",
          icon: "setting.png",
          checked: false,
        },
        {
          id: 1,
          text: "Text second",
          icon: "user.png",
          checked: true,
        },
        {
          id: 2,
          text: "Text third",
          icon: "phone.png",
          checked: true,
        },
      ],
    };
  },
  computed: {
    totalCount() {
      return this.posts.length + " texts";
    },
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
    }

    &:hover {
      color: red;
    }

    &.checked {
      color: red;
    }
  }
}

.total {
  padding-left: 40px;
}
</style>
