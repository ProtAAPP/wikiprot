<template>
   <footer>
      <cookie-law theme="base"
                  position="bottom"
                  buttonText="entendido"
                  message="Este sitio usa cookies para contar los visitantes"
      />
   </footer>
</template>

<script>
   // Se pueden consultar las opciones del compoenente en
   // https://github.com/apertureless/vue-cookie-law#readme
   
   import CookieLaw from 'vue-cookie-law'
   
   export default 
   {
      name: "AvisoCookies",
      components: { CookieLaw }
   }
   
</script>
