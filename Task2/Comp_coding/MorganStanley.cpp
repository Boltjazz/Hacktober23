#include <iostream>
#include <vector>

int findEqualSumIndex(std::vector<int>& arr) {
    int n = arr.size();
    
    
    int totalSum = 0;
    for (int i = 0; i < n; i++) {
        totalSum += arr[i];
    }
    
    int leftSum = 0;
    
    for (int i = 0; i < n; i++) {
        
        totalSum -= arr[i];
        
        if (leftSum == totalSum) {
            return i;
        }
        
        leftSum += arr[i];
    }
    
    
    return -1;
}

int main() {
    std::vector<int> arr = {2, 4, 5, 1, 2, 3};
    
    int equalSumIndex = findEqualSumIndex(arr);
    
    if (equalSumIndex != -1) {
        std::cout << "Index where the sum of left and right subarrays is equal: " << equalSumIndex << std::endl;
    } else {
        std::cout << "No such index found." << std::endl;
    }
    
    return 0;
}
