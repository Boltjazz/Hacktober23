nterms = int(input("How many terms? "))
n1, n2 = 0, 1

if nterms <= 0:
    print("Please enter a positive integer")
elif nterms == 1:
    print("Fibonacci sequence upto", nterms ,":")
else:
    print("Fibonacci sequence:")
    for _ in range(nterms):
        print(n1)
        n1, n2 = n2, n1 + n2