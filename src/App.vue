<template>
  <div>
    <!-- <h1 v-if="isDirectives">Lesson 4: Directives</h1>
    <h1 v-else>Lesson 4: {{ title }}</h1>  oder:-->
    <h1 v-show="isDirectives">Lesson 4: Directives</h1>
    <h1 v-show="!isDirectives">Lesson 4: {{ title }}</h1>
    <ul>
      <list-item
        v-for="post in posts"
        :key="post.id"
        :text="post.text"
        :icon="post.icon"
      >
        <template v-slot:pretext>
          <span>Pretext</span>
        </template>
        <span>Some text</span>
      </list-item>
      <!-- if we have no ID we use the UUID library -->
    </ul>
    <span class="total"> Total: {{ totalCount }} </span>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { ListItem },
  data() {
    return {
      title: "Data, Computed",
      isDirectives: true,
      posts: [
        {
          id: uuidv4(),
          text: "Text first ",
          icon: "setting.png",
          checked: false,
        },
        {
          id: uuidv4(),
          text: "Text second",
          icon: "user.png",
          checked: true,
        },
        {
          id: uuidv4(),
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
