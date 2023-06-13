<template>
    <div class="mb-3 pointer p-2 entry-container" @click="$router.push({name: 'entry', params: {id: 10} })">
        <!-- Title -->

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15 </span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi, autem tenetur, asperiores illum mollitia facilis corporis enim nihil iste eum omnis tempora quaerat reprehenderit dicta quis hic doloribus ut?
            Nihil magni, architecto inventore enim possimus ullam accusamus sit nulla est ab, minus excepturi pariatur, doloremque expedita molestias adipisci tempora perferendis! Quis exercitationem facilis reprehenderit ipsam distinctio harum voluptatum quas.
        </div>
    </div>
</template>




<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45)
        }

        .entry-description{
            font-size: 12px;
        }
    }

    

</style>