const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');

toggleMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('sidebar-toggled');
});

// 由於 table-responsive 導致下拉式選單無法展開，因此調整下拉式選單的位置
const tableRwd = document.querySelector('#table-rwd');

tableRwd.addEventListener('show.bs.dropdown', function(e) {
  const menu = e.target.nextElementSibling;
  tableRwd.appendChild(menu);
});

tableRwd.addEventListener('hide.bs.dropdown', function(e) {
  const btn = e.target;
  const menu = document.querySelector(`[data-bs-menu=${btn.dataset.bsBtn}]`);
  btn.after(menu);
});