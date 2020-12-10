function getFirstSelector(selector){
  return document.querySelector('div').innerHTML;
}

function nestedTarget(selector){
  return document.querySelector('#nested.target').innerHTML;
}

function deepestChild(){
return document.getElementById("grand-node").
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parseInt(n)).toString();
  }
}
