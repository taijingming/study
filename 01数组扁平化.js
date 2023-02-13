const arr = [ 1, [2,3, [4,5,[6,7]]]]
//  console.dir(arr, {depth: 3})
const arr1 = arr.flat(Infinity)
const arr2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
const arr3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '').split(',') + ']')

const flat1 =( arr=[]) => {
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flat1(cur) : cur)
    }, [])
}
const arr4 = flat1(arr)

const flat2 = (arr =[]) => {
    const retArr = []
    arr.forEach(item => {
        retArr.push(Array.isArray(item) ? flat2(item) : item)
    })
    return retArr
}
const arr5 = flat1(arr)

