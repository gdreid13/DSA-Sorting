/* 
1.
Given the following list of numbers
21, 1, 26, 45, 29, 28, 2, 9, [MIDDLE] 16, 49, 39, 27, 43, 34, 46, 40
After 3 recursive calls to mergesort, the lists will be:
[21, 1, 26, 45]
[29, 28, 2, 9]
[16, 49, 39, 27, 43, 34, 46, 40]

After 16 recursive calls to mergesort, the list will be 16 discrete
elements, since the list is 16 elements in length (i = 0 through 15).

The first two lists to be merged will be [21] and [1].

On the 7th merge you should be merging [43] and [34].

2.
1) Could be either 14 or 17.  In either case, after the first pass, everything
to the left of either pivot is less than that pivot, and everything to the
right of either pivot is greater than that pivot.

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
show the resulting list after the second partitioning according to the
quicksort algorithm:
When last item on list is pivot:
First partition [10, 3, 9, 12, 15, 19, 14, 17, 16, 13]
Second partition [10, 3, 9, 12, 13, 15, 19, 14, 17, 16]
When first item on list is pivot:
First partition [13, 10, 3, 9, 12, 14, 15, 16, 19, 17]
Second partition [3, 9, 12, 10, 13, 14, 15, 16, 19, 17]

3.  qSort below

4.  mSort below
*/

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  console.log(array);
  return array;
};

function mSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  console.log(merge(left, right, array));
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};



let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15,
  62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69,
  64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31,
  26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27,
  22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

mSort(array);