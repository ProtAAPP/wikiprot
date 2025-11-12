<template>
  <footer
    v-if="visible"
    class="cookie-banner"
    role="complementary"
    aria-live="polite"
  >
    <div class="cookie-banner__content">
      <p>{{ message }}</p>
      <button class="cookie-banner__button" type="button" @click="dismiss">
        {{ buttonText }}
      </button>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const STORAGE_KEY = 'wiki-prot-cookie-consent'

const visible = ref(false)

const props = defineProps({
  message: {
    type: String,
    default: 'Este sitio usa cookies para contar las visitas.'
  },
  buttonText: {
    type: String,
    default: 'Entendido'
  }
})

function checkStatus() {
  try {
    visible.value = localStorage.getItem(STORAGE_KEY) !== 'accepted'
  } catch {
    visible.value = true
  }
}

function dismiss() {
  try {
    localStorage.setItem(STORAGE_KEY, 'accepted')
  } catch {
    // ignore storage issues, but still hide the banner
  }
  visible.value = false
}

onMounted(checkStatus)
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  inset: auto 0 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 1rem 1.5rem;
  box-shadow: 0 -6px 16px rgba(0, 0, 0, 0.3);
}

.cookie-banner__content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
}

.cookie-banner p {
  margin: 0;
  flex: 1 1 200px;
}

.cookie-banner__button {
  border: none;
  background-color: #42b883;
  color: #000;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.cookie-banner__button:hover,
.cookie-banner__button:focus-visible {
  opacity: 0.9;
}
</style>
