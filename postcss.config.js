module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        // 關掉 cascade-layers polyfill。
        // 它把 @layer 降級成 `:not(#\#)` 特異度 hack，讓 Tailwind preflight 的
        // `*` 選擇器取得 ID 級特異度 (1,0,0)，壓過所有 .ds-* component 規則
        // —— 實測 .ds-hero 的 display 生效但 margin/padding 被歸零。
        // 目標瀏覽器自 2022 年起全面支援原生 @layer，這個 polyfill 是純傷害。
        'cascade-layers': false,
      },
    },
    // Tailwind 已由 astro.config.mjs 的 @tailwindcss/vite 處理，
    // 這裡再掛一次會讓同一份 CSS 被處理兩遍。
  },
};
