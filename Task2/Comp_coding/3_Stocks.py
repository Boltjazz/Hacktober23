This competitive coding question is asked in Goldman Sachs.:

Problem Statement: Suppose you have given the stock prices for respective days like (100, 180, 260, 310, 40, 535, 695). The stock price for the 1st day is 100, the 2nd day it is 180 and so on. Write a Python program to determine what days the user should buy and sell the stocks to get the maximum profit.

In the above case, in the following scenarios user will get maximum profit.

Buy stock on 1st day (100)
Sell stock on 4th day (310)
Buy stock on 5th day (100)
Sell stock on 7th day (695)
Algorithm steps:

Find the local minima (buying stock)
Find local maxima (selling stock)
Repeat until all days are covered.

Output:

buy stock on day 1 100
sell stock on day 4 310
buy stock on day 5 40
sell stock on day 7 695

"You can solve the code in any language you want just change the extenshion of the file and make sure it run , you can the
commit the code"

---
