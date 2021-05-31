export function getHeapSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    let len = array.length;
    HeapSortHelper(auxillaryArray, animations, len);
    array = auxillaryArray;
    console.log(animations);
    return [animations, array];
}

function HeapSortHelper(auxillaryArray, animations, len)
{
    for(let i=0; i <= len/2-1; i++){
        HeapSort(auxillaryArray, animations, i, len);
    }
    for(let i = len-1; i>0; --i){
        
        swap(animations, auxillaryArray, 0, i);
        HeapSort(auxillaryArray, animations, 0, i);

    }
}

function HeapSort(auxillaryArray, animations, parent, size) {
    var temp_parent = parent;
    var left_child = parent * 2 + 1;
    var right_child = parent * 2 + 2;

    console.log(auxillaryArray);

    if(left_child < size && auxillaryArray[temp_parent] < auxillaryArray[left_child]){
        temp_parent = left_child;
    }

    if(right_child < size && auxillaryArray[temp_parent] < auxillaryArray[right_child]){
        temp_parent = right_child;
    }

    if(parent != temp_parent){
        /*animations.push([temp_parent, parent]);
        animations.push([temp_parent, parent]);
        animations.push([parent, auxillaryArray[temp_parent]]);
        animations.push([temp_parent, auxillaryArray[parent]]);*/
        swap(animations, auxillaryArray, parent, temp_parent);
        console.log(temp_parent);
        HeapSort(auxillaryArray, animations, temp_parent, size);
    }
    else {
        animations.push([temp_parent, parent]);
        animations.push([temp_parent, parent]);
        animations.push([-1, -1]);
        animations.push([-1, -1]);
    }
    animations.push([-1, -1]);
    animations.push([-1, -1]);
}

function swap(animations, auxillaryArray, firstIndex, secondIndex) {
    animations.push([firstIndex, secondIndex]);
    animations.push([firstIndex, secondIndex]);
    animations.push([firstIndex, auxillaryArray[secondIndex]]);
    animations.push([secondIndex, auxillaryArray[firstIndex]]);
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

