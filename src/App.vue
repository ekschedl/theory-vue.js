<template>
<div> 
  <h1> Lesson 4: {{ title }} </h1>
  <ul>
    <li :class="posts[0].checked ? 'checked' : ''">
        <img :src="require(`@/assets/images/${posts[0].icon}`)" :alt="posts[0].icon">     
        <span>{{posts[0].text}} {{" '- i am javascript code' "}}{{(1+2)}}</span>
    </li>
    <li :class="posts[1].checked ? 'checked' : ''">
        <img :src="require(`@/assets/images/${posts[1].icon}`)":alt="posts[1].icon">   
        <span>{{posts[1].text}}</span>
    </li>
    <li class="list-item" :class="posts[2].checked ? 'checked' : ''">
      <img :src="require(`@/assets/images/${posts[2].icon}`)" :alt="posts[2].icon">   
        <span>{{posts[2].text}}</span>
    </li>
  </ul>
  <span class="total"> Total: {{ totalCount }} </span>
</div>
</template>

<script>
export default {
  data (){
    return {
      title: 'Data, Computed',
      posts: [
        {
          id:0,
          text:'Text first ',
          icon: 'setting.png',
          checked: true
        },
        {
          id:1,
          text:'Text second',
          icon: 'user.png',
          checked: true
        },
        {
          id:2,
          text:'Text third',
          icon: 'phone.png',
          checked: true
        }
      ]
    }
  },
  computed: {
    totalCount(){
      return this.posts.length + " texts"
    }

    }
  }

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
