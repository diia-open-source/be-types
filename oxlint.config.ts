import { defineConfig, base } from '@diia-inhouse/oxc-config/oxlint'

export default defineConfig({
    ...base,
    rules: {
        ...base.rules,
        '@diia-inhouse/code/const-enum-naming': 'off',
        '@diia-inhouse/locale/no-hardcoded-cyrillic': 'off',
    },
})
