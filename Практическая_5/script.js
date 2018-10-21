let people = {
    'Lena': '2000.10.15',
    'Denis': '2001.02.19',
    'Melissa': '2001.01.10',
    'Dima': '2000.08.20',
    'Deda': '1999.05.25' 
}
function howSort(obj, what, how){
    let newObj = obj;
    let sortArr = [];

    let objNew = {};

    for(let key in newObj){
        sortArr.push([key, newObj[key]])
    }

    if(what == 'name' && how == 'mintomax'){
        sortArr.sort();
    } else if(what == 'name' && how == 'maxtomin'){
        sortArr.sort().reverse()
    }

    if(what == 'date' && how == 'mintomax'){
        sortArr.forEach(element => {
            element[1] = new Date(element[1]).getTime()
        });
        sortArr.sort((a,b) => a[1] - b[1]).reverse()
        sortArr.forEach(element => {
            element[1] = new Date(element[1])
        })
    } else if (what == 'date' && how == 'maxtomin') {
        sortArr.forEach(element => {
            element[1] = new Date(element[1]).getTime()
        });
        sortArr.sort((a,b) => a[1] - b[1]);
        sortArr.forEach(element => {
            element[1] = new Date(element[1])
        });
    }                                                              

    for(let i = 0, leng = sortArr.length; i < leng; i++){
        objNew[sortArr[i][0]] = sortArr[i][1]
    }

    return objNew;
}   

console.log(new Date('2000.10.15'))

console.log(howSort(people, 'date' , 'mintomax'));