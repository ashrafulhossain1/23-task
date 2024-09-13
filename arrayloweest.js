
function lowestNumber(heights){
    let minor = heights[0];
    // console.log(minor)
    for(const height of heights){
        if(height < minor){
            minor = height
        }
    }
    return minor;
}


const heights2 = [-50,67, 190, 120, 165, 137];
const lowNumberIs = lowestNumber(heights2)
console.log('Minor Number of this Array:',lowNumberIs);