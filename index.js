let getFirstSelector = (selector) =>
    document.querySelector(selector);
    
let nestedTarget = () =>
    document.querySelector('#nested .target');

let deepestChild = () =>{
    let containerDiv = document.querySelector('#grand-node');
    let nextDiv = containerDiv.firstElementChild

    while (nextDiv) {
        containerDiv = nextDiv;
        nextDiv = containerDiv.firstElementChild;
    }
    return containerDiv;
}

let increaseRankBy = (n) => {
    const rankedLists = document.querySelectorAll('.ranked-list')
    let allList = [...rankedLists[0].children, ...rankedLists[1].children]


    for (let i = 0; i < allList.length; i++) {
        let num = parseInt(allList[i].innerHTML)+n
        allList[i].innerHTML =  num.toString();
    }


}