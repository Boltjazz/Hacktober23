def count_common_factors(a, b):
    # Initialize a counter variable to keep track of the number of common factors
    count = 0
    # Iterate over all possible factors of a and b
    for i in range(1, min(a, b)+1):
        # If i is a factor of both a and b, increment the counter
        if a % i == 0 and b % i == 0:
            count += 1
    # Return the final count of common factors
    return count

# Prompt the user to enter two numbers
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

# Call the count_common_factors function with the user's input and print the result
print("The number of common factors are: ", count_common_factors(a, b))