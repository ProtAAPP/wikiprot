<template>
   <footer>

      <component v-if="dynamicComponentCookieLaw" 
                 :is="dynamicComponentCookieLaw"
                 position="bottom"
                 buttonText="entendido"
                 message="Este sitio usa cookies para contar los visitantes"
      />
      
   </footer>
</template>

<script>
   // Se pueden consultar las opciones del compoenente en
   // https://github.com/apertureless/vue-cookie-law#readme
   
   export default 
   {
      name: "AvisoCookies",
      data() {
         return {
            dynamicComponentCookieLaw: null
         }
      },

      mounted () {
         import('../../../node_modules/vue-cookie-law').then(module => {
            this.dynamicComponentCookieLaw = module.default
         })
      }
   }
   
</script>
