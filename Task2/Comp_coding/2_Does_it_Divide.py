from math import sqrt
def isPrime(n):
	
	
	if (n <= 1):
		return False
	if (n <= 3):
		return True

	if (n % 2 == 0 or n % 3 == 0):
		return False

	for i in range(5, int(sqrt(n)) + 1, 6):
		if (n % i == 0 or n % (i + 2) == 0):
			return False

	return True

def isDivisible(n):
	if (isPrime(n + 1)):
		return False
	return True



t = int(input())
while t>0 :
    n = int(input())
    if(isDivisible(n)):
        print("Yes")
    else:
        print("No")