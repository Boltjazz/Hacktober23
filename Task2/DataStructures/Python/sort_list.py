a = []
c=[]
n1 = int(input("Enter number of elements: "))
for i in range(1,n1+1):
  b=int(input("Enter Element"))
  a.append(b)
n2 = int(input("Enter number of elements: "))
for i in range(1,n2+1):
  d=int(input("Enter Element"))
  c.append(d)
new=a+c
new.sort()
print("Sorted list is: ", new)