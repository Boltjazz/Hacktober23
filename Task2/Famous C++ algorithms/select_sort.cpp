#include <bits/stdc++.h>
using namespace std;
#define sz(arr) ((int) arr.size())
#define all(x) x.begin(), x.end()
typedef vector<string> vs;
typedef pair<int, int> ii;
typedef vector<ii> vii;
typedef vector<int> vi;
typedef long long ll;
typedef vector<ll> vl;

vl select_sort(vl& nums){
int n=sz(nums);
for(int i=0;i<n;i++){
    int min_idx=i;
    for(int j=i+1;j<n;j++)if(nums[j]<nums[min_idx])min_idx=j;
    swap(nums[i], nums[min_idx]);
}return nums;
}

int main() {
ios::sync_with_stdio(false);
cin.tie(0);
cout<<"Original Array: {5, 2, 3, 1}\n";
vl nums = {5, 2, 3, 1};
vl ans = select_sort(nums);
cout<<"Sorted Array: {";
for(int i=0;i<sz(nums)-1;i++){
    cout<<nums[i]<<", ";
}cout<<nums[sz(nums)-1]<<"}\n";
return 0;
}