function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested").querySelector('div.target');
}

function deepestChild(){
var deepnode = document.getElementById("grand-node").querySelector('div'[5].innerHMTL);

}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)  + n;
  }
}
