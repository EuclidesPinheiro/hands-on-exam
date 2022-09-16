arr = [3,8,6,89,25,63,127,89,852,752]
const inversion = function(arr)
{
    c = arr.sort(function(a, b) {
        return a - b;
    })
    return console.log(c.reverse());
}
inversion(arr);



