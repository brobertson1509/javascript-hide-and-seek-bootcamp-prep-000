function getFirstSelector(selector){
  return document.getElementsByTagName(selector);
}

function nestedTarget(){
  return document.querySelector("#nested").querySelector('div.target');
}

function deepestChild(){
return document.getElementById("grand-node")
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parseInt(`${n}`)).toString();
  }
}
