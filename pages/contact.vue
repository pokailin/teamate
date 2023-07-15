<script setup lang="ts">
import { z } from "zod";

const ContactInfoSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email().min(5),
  message: z.string().min(1).max(250).optional(),
});

type ContactInfo = z.infer<typeof ContactInfoSchema>;

const data = reactive<Partial<ContactInfo>>({
  name: undefined,
  email: undefined,
  message: undefined,
});

const submitPending = ref(false);
const hasError = ref(false);

const onSubmit = async () => {
  try {
    const contactInfo = ContactInfoSchema.parse(data);

    console.log(contactInfo);

    submitPending.value = true;
    const { data: response, error } = await useFetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: contactInfo,
    });

    // setTimeout(() => {
    submitPending.value = false;
    // }, 2000);

    hasError.value = error.value != null;

    console.log(response);
  } catch (e) {
    submitPending.value = false;
    console.log(e);
  }
};
</script>

<template>
  <section class="w-full h-full flex">
    <div class="img-container flex-1">
      <div class="flex justify-center">
        <img
          class="h-full border dark:border-surface/50"
          src="https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2884&q=80"
        />
      </div>
    </div>
    <div class="contact-container flex-1">
      <h2 class="text-6xl dark:text-white uppercase">Contact Us</h2>
      <div class="form-container">
        <form class="flex gap-4 flex-col w-fit" @submit.prevent="onSubmit">
          <div class="input-container">
            <label for="name">Name</label>
            <input
              type="text"
              placeholder="What's your name?"
              required
              v-model="data.name"
            />
          </div>

          <div class="input-container">
            <label for="email">Email Address</label>
            <input
              type="email"
              placeholder="What's your email address?"
              required
              v-model="data.email"
            />
          </div>

          <div class="input-container">
            <label for="message">Message</label>
            <textarea
              type="text"
              placeholder="What's on your mind?"
              required
              v-model="data.message"
            ></textarea>
          </div>

          <button :disabled="submitPending">
            <span v-if="!submitPending">Contact Us</span>
            <div v-else class="flex items-center gap-2 justify-center">
              <span>Sending...</span>
              <Icon name="ph:spinner-gap-thin" class="animate-spin" />
            </div>
          </button>
        </form>

        <div class="extra-info flex flex-col gap-4">
          <div>email</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  .img-container,
  .contact-container {
    @apply pt-24;
  }

  .img-container {
    @apply px-24 pb-24;
  }

  .contact-container {
    @apply flex flex-col gap-24;
    .form-container {
      @apply border-t border-l flex-grow w-full border-onSurface/50 dark:border-surface/50 px-12 py-16 flex justify-between;

      .input-container {
        @apply flex flex-col gap-1;

        label {
          @apply uppercase text-xs dark:text-white;
        }

        input,
        textarea {
          @apply w-96 bg-primary/10 rounded-md py-3 px-2 transition-all duration-300;

          &:hover {
            @apply ring ring-primary;
          }

          &:focus {
            @apply outline-none ring ring-primary;
          }
        }
      }

      button {
        @apply border-2 border-white rounded-full py-3 text-primary transition-colors duration-300 text-lg;

        &:hover {
          @apply bg-white;
        }
      }
    }
  }
}
</style>
