
function smallestName(names){
    let smallerName=names[0]; 
    // console.log(smallerName.length)
    for(const name of names){
       if(name.length < smallerName.length){
        smallerName = name;
       }
    }
    return smallerName;
}


const names = ['rahim', 'robin', 'rafi', 'jon', 'rashed'];
const smallerNameIs = smallestName(names);
console.log(smallerNameIs);