#include <iostream>

int main() {
    int T; // Number of test cases
    std::cin >> T; // Input the number of test cases

    while (T--) { // Loop through each test case
        int N; // The value for each test case
        std::cin >> N; // Input the value

        long long sum = 0; // Initialize a variable to store the sum
        long long prod = 1; // Initialize a variable to store the product

        // Calculate the sum and product from 1 to N
        for (int i = 1; i <= N; ++i) {
            sum += i; // Add i to the sum
            prod *= i; // Multiply i to the product
        }

        // Check if the product is divisible by the sum
        if (prod % sum == 0) {
            std::cout << "YEAH" << std::endl; // If divisible, print "YEAH"
        } else {
            std::cout << "NAH" << std::endl; // If not divisible, print "NAH"
        }
    }

    return 0; // Exit the program
}
