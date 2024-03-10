<script></script>

<template>
    <footer :class="$style.container">
        {{
            $t('components.footer.copyright', {
                year: new Date().getFullYear()
            })
        }}
    </footer>
</template>

<style lang="scss" module>
@import './style.scss';
</style>
