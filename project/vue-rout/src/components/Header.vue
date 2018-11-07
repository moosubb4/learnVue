<template>
<ul class="nav nav-pills">
    <li class="nav-item">
      <router-link to="/" tag="a" class="nav-link" active-class="active" exact>
         Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user/1" tag="a" class="nav-link" active-class="active" exact>
         User1
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user/2" tag="a" class="nav-link" active-class="active" exact>
         User2
      </router-link>
    </li>
</ul>
</template>
