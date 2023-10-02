/* Write a program in C to display Armstrong numbers in a range */


#include <stdio.h>
#include <math.h>

void main() {
    int n1,n2,i,num_copy,num1_copy,p,digits = 0,sum = 0;
    
    printf("Enter the lower limit: ");
    scanf("%d",&n1);
    
    printf("Enter the upper limit: ");
    scanf("%d",&n2);
    
    for (i = n1; i <= n2; i++) {
        num_copy = i;
        num1_copy = i;
        while(num_copy > 0) {
            num_copy/=10;
            digits++;
        }
        while(num1_copy > 0) {
            p = num1_copy%10;
            sum += pow(p,digits);
            num1_copy/=10;
        }
    
    if (sum == i) {
        printf("%d\t",i);
    }
    digits = 0;
    sum = 0;
        
    }

}

