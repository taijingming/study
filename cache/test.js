const getLen1 = (target, str) => (target.match(new RegExp(str, 'g')).length)
function getLen2(target, str) {
    return target.match(new RegExp(str, 'g')).length
}
console.log(getLen1('hgcxxvxxcv','xx'))
console.log(getLen2('hgcxxvxxcv','x'))