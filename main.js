let array = ["1", "2", "3", "sea", "user", 23];
let element = document.body;
let elementDiv = document.querySelector('.someDiv');

function createList(arr, elem){
    let listUl = document.createElement('ul');
    elem.prepend(listUl);

    for(let i in arr)
    {
        let listLi = document.createElement('li');
        listLi.innerText = arr[i];
        if(i = 0)
        {
            listUl.prepend(listLi);
        }else
        {
            listUl.append(listLi);
        }
    }
}
createList(array, elementDiv);