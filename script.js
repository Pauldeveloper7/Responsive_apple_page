const list1 = document.getElementsByClassName('list-items')[1];
const list2 = document.getElementsByClassName('list-items')[2];
const list3 = document.getElementsByClassName('list-items')[3];
const list4 = document.getElementsByClassName('list-items')[4];
const list5 = document.getElementsByClassName('list-items')[5];
const list6 = document.getElementsByClassName('list-items')[6];
const list7 = document.getElementsByClassName('list-items')[7];
const list8 = document.getElementsByClassName('list-items')[8];
const list9 = document.getElementsByClassName('list-items')[9];
const list10 = document.getElementsByClassName('list-items')[10];
const list11 = document.getElementsByClassName('list-items')[11];
const list12 = document.getElementsByClassName('list-items')[12]
const hamburg = document.getElementById('hamburger')
var nested = document.getElementsByClassName('nested')[0];
var nested1 = document.getElementsByClassName('nested')[1];
var nested2 = document.getElementsByClassName('nested')[2];
var nested3 = document.getElementsByClassName('nested')[3];
var nested4 = document.getElementsByClassName('nested')[4];
var nested5 = document.getElementsByClassName('nested')[5];
var nested6 = document.getElementsByClassName('nested')[6];
var nested7 = document.getElementsByClassName('nested')[7];
var nested8 = document.getElementsByClassName('nested')[8];
var nested9 = document.getElementsByClassName('nested')[9];
var nested10 = document.getElementsByClassName('nested')[10];
var nested11 = document.getElementsByClassName('nested')[11];
var responsive_nav = document.getElementsByClassName('responsive')[0]

const handleList1Click =  function(){
    nested.style.display = 'flex'
}
const removeNestedList = function(){
    nested.style.display = 'none'
}
const handleList1Click2 =  function(){
    nested1.style.display = 'flex'
}
const removeNestedList2 = function(){
    nested1.style.display = 'none'
}
const handleList1Click3 =  function(){
    nested2.style.display = 'flex'
}
const removeNestedList3 = function(){
    nested2.style.display = 'none'
}
const handleList1Click4 =  function(){
    nested3.style.display = 'flex'
}
const removeNestedList4 = function(){
    nested3.style.display = 'none'
}
const handleList1Click5 =  function(){
    nested4.style.display = 'flex'
}
const removeNestedList5 = function(){
    nested4.style.display = 'none'
}
const handleList1Click6 =  function(){
    nested5.style.display = 'flex'
}
const removeNestedList6 = function(){
    nested5.style.display = 'none'
}
const handleList1Click7 =  function(){
    nested6.style.display = 'flex'
}
const removeNestedList7 = function(){
    nested6.style.display = 'none'
}
const handleList1Click8 =  function(){
    nested7.style.display = 'flex'
}
const removeNestedList8 = function(){
    nested7.style.display = 'none'
}
const handleList1Click9 =  function(){
    nested8.style.display = 'flex'
}
const removeNestedList9 = function(){
    nested8.style.display = 'none'
}
const handleList1Click10 =  function(){
    nested9.style.display = 'flex'
}
const removeNestedList10 = function(){
    nested9.style.display = 'none'
}
const handleList1Click11 =  function(){
    nested10.style.display = 'flex'
}
const removeNestedList11 = function(){
    nested10.style.display = 'none'
}
const responsive_navigation =  function(){
    responsive_nav.style.display = 'flex'
}
const Responsive_del = function(){
    responsive_nav.style.display = 'none'
}
list1.addEventListener('click', handleList1Click);
list1.addEventListener('mouseout',removeNestedList)
list2.addEventListener('click',handleList1Click2)
list2.addEventListener('mouseout',removeNestedList2)
list3.addEventListener('click',handleList1Click3)
list3.addEventListener('mouseout',removeNestedList3)
list4.addEventListener('click',handleList1Click4)
list4.addEventListener('mouseout',removeNestedList4)
list5.addEventListener('click',handleList1Click5)
list5.addEventListener('mouseout',removeNestedList5)
list6.addEventListener('click',handleList1Click6)
list6.addEventListener('mouseout',removeNestedList6)
list7.addEventListener('click',handleList1Click7)
list7.addEventListener('mouseout',removeNestedList7)
list8.addEventListener('click',handleList1Click8)
list8.addEventListener('mouseout',removeNestedList8)
list9.addEventListener('click',handleList1Click9)
list9.addEventListener('mouseout',removeNestedList9)
list10.addEventListener('click',handleList1Click10)
list10.addEventListener('mouseout',removeNestedList10)
list11.addEventListener('click',handleList1Click11)
list11.addEventListener('mouseout',removeNestedList11)
hamburg.addEventListener('click',responsive_navigation);
hamburg.addEventListener('mouseout',Responsive_del)