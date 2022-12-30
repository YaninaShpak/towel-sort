
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let newArr = matrix.map((el, i) => i % 2 != 0 ? el.reverse() : el);
        return newArr.flat();
    } else {
        return [];
    }
}
