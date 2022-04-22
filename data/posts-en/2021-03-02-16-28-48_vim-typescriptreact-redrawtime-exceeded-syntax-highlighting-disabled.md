---
title: "vim typescriptreact &#8216;redrawtime&#8217; exceeded, syntax highlighting disabled"
date: 2021-03-02T16:28:48
slug: "vim-typescriptreact-redrawtime-exceeded-syntax-highlighting-disabled"
excerpt: "<p>I am a front-end developer, and I use vim as my editor &#8230;</p>
"
feature_image: null
guid: "https://blog.wildsky.cc/?p=1670"
---
I am a front-end developer, and I use vim as my editor for daily use. Sometimes I need to program React.js in TypeScript, but there are some troubles in vim when I want the syntax highlight for React.js & TypeScript.

I try several packages, and there are some different problems… Such as this:

    'redrawtime' exceeded, syntax highlighting disabled. 

I tried again and again, then I found it suddenly work. But I don’t know why…

Anyway, here are my config for React.js and TypeScript in Vim.

    Plug 'leafgarland/typescript-vim'
    Plug 'peitalin/vim-jsx-typescript'
    Plug 'othree/yajs.vim'

    au BufNewFile,BufRead *.tsx,*.jsx set filetype=typescript.typescriptreact

Ref
---

*   [How to fix slow Typescript syntax highlighting in Vim](https://jameschambers.co.uk/vim-typescript-slow)