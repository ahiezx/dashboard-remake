<template>
    <div>
        <div class="
            container
            mx-auto
            ">
                <div class="grid grid-cols-2 text-white">
                    <div class="

                        

                    ">

                        <h2 class="
                            text-2xl
                            font-extrabold
                            
                            mb-2
                        ">{{title}}</h2>
                        <p class="
                            text-sm
                            font-regular
                            text-gray-400
                            mb-2
                        ">{{description}}</p>

                    </div>
                    <div class="my-auto pt-2
                        text-right
                    ">

                    <label class="form-switch">
                        <input type="checkbox">
                        <i></i>
                        
                    </label>

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                </div>
            </div>
    </div>
</template>
<script>

export default {
    
    props: ['title', 'description', 'action'],

}
</script>
<style lang="">
    
</style>