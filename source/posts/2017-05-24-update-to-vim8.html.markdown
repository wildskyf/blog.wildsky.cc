---
title: Vim 上 8.0, Vundle 換 vim-plug
categories:
  - Editor
---

今天被 Othree 推坑，把 Vim 升上 8.0 了，其實感覺也沒有什麼太大的改變。

指令就下這個：

```
brew install vim --with-override-system-vi
```

升級後重開 Terminal 就會是 8.0 的 Vim 了。
升級完了以後就順便把之前用的 Vundle 換成 vim-plug，這樣就可以用到 8.0 的 async process，
聽起來就是很潮。


其實換過去的步驟也蠻簡單的，這邊簡單記錄一下我做了什麼。

先把他的管理相關 script 丟進 `autoload` 的目錄下。像我是 Mac 的純 vim 就跑這
段：

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

其他的環境或是 neovim 就有其他的指令，要看一下他的 Repo 的 README。

再來就是把 Plugin list 掐頭去尾，只留下一串串 `Plugin 'plugin_name'` 就好。

然後就是前面加上 `call plug#begin()`，後面補個 `call plug#end()` 就完成了。

順便提一下，Vundle 放套件的目錄是 `~/.vim/bundle/`，所以我可以把前面換成 `call plug#begin('~/.vim/bundle')` 理論上就不需要重裝了～不過我還是乖乖地用了個不一樣的名字。

如果像我一樣，資料夾是用不一樣名字的話，就可以退出後下 `vim -c 'PlugInstall' -c 'qa!'` 他就會裝起來哩。

## 相關連結

- [vim-plug 的 repository](https://github.com/junegunn/vim-plug)
- [stackoverflow 上的 How update vim to 8.0 version in OSX](https://stackoverflow.com/questions/39861793/how-update-vim-to-8-0-version-in-osx)
- [我的 Vim config](https://github.com/wildskyf/vim.d)

