
/**
 * Version 1 of water trapping function
 * @param {number[]} height array of height
 * @returns number
 */
function trapping (height) {
  let trappedWater = 0
  height.forEach((elm, i, arr) => {

    let tallLeft = elm

    for (let index = 0; index <= i; index++) {
      const element = arr[index];

      if(element> tallLeft) {
        tallLeft = element
      }
    }
    let tallRight = elm
    
    for (let index = i+1; index < arr.length; index++) {
      const element = arr[index];
      
      if(element> tallRight) {
        tallRight = element
      }
    }
    const minHeight = Math.min(tallRight, tallLeft)

    trappedWater = trappedWater + (minHeight - elm)
    
  })

  return trappedWater;
};



/**
 * Optimised water trapping function
 * @param {number[]} height array of height
 * @returns number
 */
function trappingV2 (height = []) {
  let trappedWater = 0
  height.forEach((elm, i,) => {

    // split heights array into right and left array using the current index
    const leftArray = height.slice(0,i+1) // create a left array with current height included
    let tallLeft = Math.max(...leftArray) // find the max

    const rightArray = height.slice(i) // create a right array with current height included
    let tallRight = Math.max(...rightArray) // find the max


    const minHeight = Math.min(tallRight, tallLeft)

    trappedWater = trappedWater + (minHeight - elm)
    
  })

  return trappedWater;
};


const data = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const data2 = [4,2,0,3,2,5]

console.log(data.toString(), 'will trap',trappingV2(data),'Unit(s) of water')
console.log(data2.toString(), 'will trap',trappingV2(data2),'Unit(s) of water')