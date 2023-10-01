#include <bits/stdc++.h>
using namespace std;

int main() {
    int num1, num2;
    int count=0;
    cout << "Enter the first positive number: ";
    cin >> num1;
    cout << "Enter the second positive number: ";
    cin >> num2;
    if (num1 <= 0 || num2 <= 0) {
        cerr << "Both numbers must be positive." << endl;
        return 1;
    }
    int gcd = __gcd(num1, num2);
    cout << "Common factors: ";
    for (int i = 2; i <= gcd; ++i) {
        if (gcd % i == 0) {
            cout << i << " ";
            count++;
        }
    }
    cout<<endl;
    if (gcd == 1) {
        cout<<"Count:"<<0<<endl;
    }
    cout << "Count of common factors: "<<count;

    return 0;
}
