#Given an array of integers, find the maximum subarray sum, where a subarray is defined as a contiguous subset of the array.

#include <stdio.h>

int maxSubarraySum(int arr[], int n) {
    int maxSum = arr[0]; // Initialize maxSum with the first element of the array
    int currentSum = arr[0]; // Initialize currentSum with the first element of the array

    for (int i = 1; i < n; i++) {
        // Choose the maximum of the current element or the current element + currentSum
        currentSum = (arr[i] > currentSum + arr[i]) ? arr[i] : currentSum + arr[i];

        // Update maxSum if currentSum becomes larger
        maxSum = (currentSum > maxSum) ? currentSum : maxSum;
    }

    return maxSum;
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int result = maxSubarraySum(arr, n);
    printf("Maximum subarray sum is: %d\n", result);

    return 0;
}
