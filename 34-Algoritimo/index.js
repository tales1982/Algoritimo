const getSmallestWord = (str) => {
    if(!str || typeof str !== "string")return null

    const strArr = str.trim().split(" ")

    let smallestWord = strArr[0]

    for(let i = 1 ; i < strArr.length; i++){
        if(strArr[i].length < smallestWord.length){
            smallestWord = strArr[i]
        }
    }
    return smallestWord
}

console.log(getSmallestWord(" vou teste agora"))