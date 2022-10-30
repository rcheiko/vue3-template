<template>
    <div class="flex flex-col justify-center items-center">
        <nav>
            <router-link to='/'>Accueil</router-link> |
            <router-link to='/second'>Second</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script lang="ts">

</script>