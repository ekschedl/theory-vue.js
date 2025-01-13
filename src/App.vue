<template>
<div> 
  <h1> Lesson 4: {{ title }} </h1>
  <ul>
    <li>
        <img :src="require(`@/assets/images/${posts[0].icon}`)" :alt="posts[0].icon">     
        <span>{{posts[0].text}} {{" '- i am javascript code' "}}{{(1+2)}}</span>
    </li>
    <li>
        <img :src="require(`@/assets/images/${posts[1].icon}`)":alt="posts[1].icon">   
        <span>{{posts[1].text}}</span>
    </li>
    <li>
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
          icon: 'setting.png'
        },
        {
          id:1,
          text:'Text second',
          icon: 'user.png'
        },
        {
          id:2,
          text:'Text third',
          icon: 'phone.png'
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
