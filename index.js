let gridItems = document.getElementsByClassName('grid-item');
let arr = [];//id

Array.from(gridItems).forEach(element => {
    if(element.id!=5){
        element.addEventListener('click', () => {
            const id = element.id;
            const index = arr.indexOf(id);
            if (index === -1) {
                arr.push(id);
                element.style.backgroundColor = 'lightgreen';
            } else if(index==arr.length-1) {
                arr.splice(index, 1);
                element.style.backgroundColor = 'initial';
            }
            console.log("Clicked ids:", arr);
        });
    }
});