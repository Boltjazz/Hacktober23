n = int(input("Enter number of elements : "))
a = []
for i in range(0,n):
  elem = int(input("Enter a number : "))
  a.append(elem)
avg = sum(a)/n
print("The average is :", round(avg,2))