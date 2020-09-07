const nav = document.querySelector('#nav');
const nav_btn = document.querySelector('#nav-btn');
const close_btn = document.querySelector('#close-btn');
const sidebar_links = document.querySelector('#sidebar');
const list_items = document.querySelectorAll('.social-icons li a')
// console.log(nav)
// console.log(nav_btn)
// console.log(close_btn)
window.addEventListener('scroll', ()=>{
   if(pageYOffset >45){
      nav.classList.add('navbar-fixed')
   }else{
      nav.classList.remove('navbar-fixed')
   }
})
nav_btn.addEventListener('click',()=>{
   console.log(sidebar_links);
   sidebar_links.classList.add('show-sidebar')
})
close_btn.addEventListener('click',()=>{
   sidebar_links.classList.remove('show-sidebar')
})
// list_items.forEach(item=>{
//    item.addEventListener('click', ()=>{
//       sidebar_links.classList.remove('show-sidebar')
//    })
// })

