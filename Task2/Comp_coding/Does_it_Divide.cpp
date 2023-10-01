#include <iostream>

int main() {
    int T;
    std::cin >> T; 

    while (T--) {
        int N;
        std::cin >> N;


        long long sum = 0;
        long long prod = 1;

        for (int i = 1; i <= N; ++i) {
            sum += i;
            prod *= i;
        }


        if (prod % sum == 0) {
            std::cout << "YEAH" << std::endl;
        } else {
            std::cout << "NAH" << std::endl;
        }
    }

    return 0;
}