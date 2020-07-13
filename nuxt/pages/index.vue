
<template>
    <c-box>
        <c-button>
            Chakra Consumed! ⚡️
            <!-- add the name of the icon to the component -->
            <c-icon name='medal'></c-icon>
        </c-button>
    </c-box>
</template>
<script lang="js">
// import the chakra icon component CIcon
    import { CBox, CButton, CIcon } from '@chakra-ui/vue'
    export default {
        name: 'App',
        components: {
            CBox,
            CButton,
            CIcon
        }
    }
</script>