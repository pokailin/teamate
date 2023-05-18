<template>
  <section class="w-full h-full flex">
    <div class="img-container flex-1">img</div>
    <div class="contact-container flex-1">
      <h2 class="text-6xl uppercase">Contact Us</h2>
      <div class="form-container">
        <form class="flex gap-4 flex-col w-fit">
          <div class="input-container">
            <label for="name">Name</label>
            <input type="text" placeholder="What's your name?" />
          </div>

          <div class="input-container">
            <label for="email">Email Address</label>
            <input type="email" placeholder="What's your email address?" />
          </div>

          <div class="input-container">
            <label for="message">Message</label>
            <textarea type="text" placeholder="What's on your mind?"></textarea>
          </div>

          <button>Contact Us</button>
        </form>
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
      @apply border-t border-l flex-grow w-full border-onSurface/50 px-12 py-16;

      .input-container {
        @apply flex flex-col gap-1;

        label {
          @apply uppercase text-xs;
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
