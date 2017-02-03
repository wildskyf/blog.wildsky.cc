---
title: Search
pageable: false
---

<div id="searchbar">
  全文搜尋：<input type="text" id="search" placeholder="在此輸入要搜尋的字串">
</div>

<ul class="article-list">
  <% blog.articles.each do |article| %>
    <li>

      <a href="<%= article.url %>">
        <time datetime="<%= article.date.strftime('%Y-%m-%d 00:00') %>"><%= article.date.strftime('%Y/%m/%d') %></time>
        &dash;
        <%= article.data.title %>
      </a>

      <div class="content" style="display:none">
        <%=h article.body %>
      </div>

    </li>
  <% end %>
</ul>

<script>
// TODO: show the matched paragraph

window.onload = function(){
  var wSearch = {

    init: function(){
      var me = this;
      var searchbar = document.querySelector('#search');

      if (/msie/i.test(navigator.userAgent))  //ie
        searchbar.onpropertychange = me.onChanged;
      else
        searchbar.addEventListener("input", me.onChanged, false);
    },

    onChanged: function(){
      var me = this;
      var search_str = document.querySelector('#search').value;
      var show_all = search_str.length === 0;

      Array.from(document.querySelectorAll('.article-list li')).forEach(function(dom){
        if (dom.textContent.match(search_str) || show_all)
          dom.classList.remove('hide');
        else
          dom.classList.add('hide');
      });
    }
  };
  wSearch.init();
};
</script>
