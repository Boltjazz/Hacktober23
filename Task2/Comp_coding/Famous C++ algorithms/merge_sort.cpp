#include <iostream>
#include <vector>

void merge(std::vector<int>& vec, int left, int middle, int right) {
    int n1 = middle - left + 1;
    int n2 = right - middle;


    std::vector<int> leftArray(n1);
    std::vector<int> rightArray(n2);


    for (int i = 0; i < n1; i++)
        leftArray[i] = vec[left + i];
    for (int i = 0; i < n2; i++)
        rightArray[i] = vec[middle + 1 + i];


    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            vec[k] = leftArray[i];
            i++;
        } else {
            vec[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        vec[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < n2) {
        vec[k] = rightArray[j];
        j++;
        k++;
    }
}

void mergeSort(std::vector<int>& vec, int left, int right) {
    if (left < right) {

        int middle = left + (right - left) / 2;

        mergeSort(vec, left, middle);
        mergeSort(vec, middle + 1, right);

        merge(vec, left, middle, right);
    }
}

int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6, 7};
    int size = arr.size();

    std::cout << "Original Array: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }

    mergeSort(arr, 0, size - 1);

    std::cout << "\nSorted Array: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
