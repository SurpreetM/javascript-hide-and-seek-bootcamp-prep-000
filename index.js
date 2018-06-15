function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
   return document.querySelector(`#nested .target`)
}
 
 function increaseRankBy(n) {
   let rankedList = document.querySelectorAll(`.ranked-list`)
   
   for (i=0, l=rankedList.length; i<l; i++) {
     let children = rankedList[i].children
     for (j=0, c = children.length; j<c; j++) {
       children[j].innerHTML = parseInt(children[j].innerHTML) + n }
   }
 }
 
 function deepestChild() {
   
   
 }