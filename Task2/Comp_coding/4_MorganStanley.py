'''
Problem statement:

You have given an array (list in the case of Python). Find the index of the element in the array such that the sum of all the elements left to the index is equal to the sum of all the elements right to the index.

This question can also be asked as

Split the array into equal sum subarrays.

Example:

Input (given array list):
[2, 4, 5, 1, 2, 3]

Output:
2

Explanation:
The left and right sub array for the index "2" is [2, 4] and [1, 2, 3]. The sum of both the sub array is 6. 
There are multiple ways to find the index of the array such that the sum of the left and right subarray is equal.

"You can solve the code in any language you want just change the extenshion of the file and make sure it run , you can the
commit the code" , at that time comment the whole question accourding to the language working with.
----------------------------------------------------------------------------------------------------------
'''
def sum(A):
	result = 0
	for item in A:
		result += item
	return result

def equilibriumPoint(A, N):
	index = N // 2
	left_sum = sum(A[:index])
	right_sum = sum(A[index+1:])
	
	if left_sum == right_sum:
		return A[index]
	
	elif left_sum > right_sum:
		while(index >= 0):
			left_sum -= A[index-1]
			right_sum += A[index]
			index -= 1
			if right_sum > left_sum:
				return -1
			elif left_sum == right_sum:
				return A[index]
	
	elif right_sum > left_sum:
		while(index <= N-1):
			left_sum += A[index]
			right_sum -= A[index+1]
			index += 1
			if left_sum > right_sum:
				return -1
			elif left_sum == right_sum:
				return A[index]
	
	else:
		return -1
	

# Driver code
arr = [ 2, 3, 4, 1, 4, 5 ]
size = len(arr)
print(equilibriumPoint(arr, size))
				
			
