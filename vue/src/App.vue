<template>
  <c-theme-provider>
    <c-reset />
    <h1>Hi</h1>
    <!--Your application goes here -->
  </c-theme-provider>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";

export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset
  }
};
</script>
