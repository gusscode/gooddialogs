<script setup lang="ts">
import { ref, Ref } from "vue";
import {
  OptionTheme,
  GoodDialogs,
  Options,
  goodDialogs,
} from "../src/gooddialogs.service";
import GToggle from "../components/GToggle.vue";
import GToggleDarkMode from "../components/GToggleDarkMode.vue";

const themes = ref(["gd-theme-indigo", "gd-theme-primary", "gd-theme-blue"]);
const currentTheme = ref<OptionTheme>("gd-theme-indigo");
const optionsGD = ref<Options>({
  theme: "gd-theme-indigo",
  darkForce: false,
  lightForce: false,
  position: "center",
  persistent: false,
  timer: null,
  title: "Title",
  subtitle: "Subtitle",
});

const message = ref("Message");

async function viewAlerts() {
  const goodDialogs = new GoodDialogs();
  const resDialog = await goodDialogs.confirm(message.value, optionsGD.value);
}

const toggleBoolean = ref(false);

function changeRefText(element: Options["cancelButtonText"], content: string) {
  console.log(content);
  if (element!.length < 1) {
    element = content;
  }
}

const changedarkMode = () => {
  document.documentElement.classList.toggle("dark");
};


</script>

<template>
  <main>
    <section style="display: flex; flex-direction: column">
      <div>
        <GToggleDarkMode></GToggleDarkMode>
      </div>
      <div>
        Theme:
        <select
          style="margin-top: 16px; margin-bottom: 16px"
          name=""
          id=""
          v-model="optionsGD.theme"
        >
          <option :value="option" v-for="(option, index) in themes">
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <button class="gd-v-button" @click="viewAlerts">Launch Dialog</button>
      </div>
    </section>

    <!-- <button class="gd-v-button" @click="goodDialogs.createNotification('Esto est una notificación')"> notificacion</button> -->

    <section style="display: grid; gap: 8px; margin-top: 16px">
      <div style="display: flex; gap: 16px">
        Message:
        <input type="text" v-model="message" />
      </div>
      <div style="display: flex; gap: 16px">
        Title
        <input type="text" v-model="optionsGD.title" />
      </div>
      <div style="display: flex; gap: 16px">
        Subtitle
        <input type="text" v-model="optionsGD.subtitle" />
      </div>
      <div style="display: flex; gap: 16px">
        Confirm Button Text
        <input
          type="text"
          v-model="optionsGD.confirmButtonText"
          @keyup="
            optionsGD.confirmButtonText?.length === 0
              ? (optionsGD.confirmButtonText =
                  goodDialogs.options.confirmButtonText)
              : ''
          "
        />
      </div>
      <div style="display: flex; gap: 16px">
        Cancel Button Text

        <input
          type="text"
          v-model="optionsGD.cancelButtonText"
          @keyup="
            optionsGD.cancelButtonText?.length === 0
              ? (optionsGD.cancelButtonText =
                  goodDialogs.options.cancelButtonText)
              : ''
          "
        />
      </div>
    </section>

    <section>
      <section>
        <GToggle v-model="optionsGD.darkForce!">Dark Force</GToggle>
        <GToggle v-model="optionsGD.lightForce!">Light Force</GToggle>
        <GToggle v-model="optionsGD.persistent!">Persistent</GToggle>
      </section>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
