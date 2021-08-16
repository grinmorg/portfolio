<template>
  <popup-window ref="popupCallback" @close="close">
    <template #default>
      <p class="text text--big popup__title">Обратная связь</p>
      <p class="text popup__text">Напишите мне и я вам обязательно отвечу 🤘</p>
      <form class="form form-callback" @submit.prevent="submitCallbackForm">
        <textarea
          @input="popupCallback.textareaError = false"
          ref="popupCallbackTextarea"
          v-model="popupCallback.textarea"
          class="form__textarea"
          :class="{
            error: popupCallback.textareaError,
          }"
          placeholder="Все что хотите мне написать..."
        ></textarea>
        <div class="form__footer">
          <input
            @input="popupCallback.nameError = false"
            ref="popupCallbackName"
            v-model="popupCallback.name"
            type="text"
            class="form__name"
            :class="{
              error: popupCallback.nameError,
            }"
            placeholder="Ваше имя"
          />
          <button class="form__submit">Отправить</button>
        </div>
      </form>
    </template>
  </popup-window>
</template>

<script>
import { projectFirestore } from "@/firebase.js";

export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    PopupWindow: () => import("@/components/PopupWindow"),
  },
  data: () => ({
    popupCallback: {
      textarea: "",
      textareaError: false,
      name: "",
      nameError: false,
    },
  }),
  watch: {
    open(value) {
      if (value) {
        this.$refs.popupCallback.open();
        console.log(process.env.FIREBASE_API);
      }
    },
  },
  methods: {
    submitCallbackForm() {
      let textarea = this.popupCallback.textarea;
      let name = this.popupCallback.name;

      if (textarea.length && name.length) {
        // Отправляю данные в firebase
        const message = {
          name: name,
          text: textarea,
        };
        projectFirestore.collection("callbackMessages").add(message);

        //   закрываю попап
        this.$refs.popupCallback.close();

        // показываю всплывашку
        this.$toast.success("Сообщение отправлено!", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      } else {
        if (!textarea.length) {
          this.$refs.popupCallbackTextarea.focus();
          this.popupCallback.textareaError = true;
        }
        if (!name.length) {
          this.$refs.popupCallbackName.focus();
          this.popupCallback.nameError = true;
        }

        // показываю всплывашку
        this.$toast.error("Поля заполнены не верно!", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="sass"></style>
