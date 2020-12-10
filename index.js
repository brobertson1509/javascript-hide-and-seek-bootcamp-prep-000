function getFirstSelector(selector){
  return document.querySelector('div').innerHTML;
}

function nestedTarget(selector){
  return document.querySelector('#nested.target').innerHTML;
}

function deepestChild(){

}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}
