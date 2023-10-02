def toh(n, init, temp, fin): 
    if n == 1:
        print(init,' ->',fin) #terminal definition
    else:
        # move n-1 disks from A to B, with C as temp
        toh(n-1, init, fin, temp)
        #move disk from A to C, with B as temp
        toh(1, init, temp, fin)
        # move n-1 disks from B to C, with A as temp
        toh(n-1, temp, init, fin)
# Tower of hanoi
k=int(input('number of disks: \n'))
toh(k,'A','B','C')
