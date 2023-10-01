#include <iostream>
#include <vector>

int findMaxProfit(std::vector<int>& prices, std::vector<int>& buyDays, std::vector<int>& sellDays) {
    int n = prices.size();
    int i = 0;
    int maxProfit = 0;
    
    while (i < n - 1) {
        
        while (i < n - 1 && prices[i + 1] <= prices[i]) {
            i++;
        }
        
        if (i == n - 1) {
            break; 
        }
        
        int buy = i++;
        
        
        while (i < n && prices[i] >= prices[i - 1]) {
            i++;
        }
        
        int sell = i - 1;
        
        int profit = prices[sell] - prices[buy];
        maxProfit += profit;
        
        buyDays.push_back(buy + 1);
        sellDays.push_back(sell + 1);
    }
    
    return maxProfit;
}

int main() {
    std::vector<int> prices = {100, 180, 260, 310, 40, 535, 695};
    std::vector<int> buyDays;
    std::vector<int> sellDays;
    
    int maxProfit = findMaxProfit(prices, buyDays, sellDays);
    
    std::cout << "Maximum Profit: " << maxProfit << std::endl;
    
    for (int i = 0; i < buyDays.size(); i++) {
        std::cout << "Buy stock on day " << buyDays[i] << " (" << prices[buyDays[i] - 1] << ")\n";
        std::cout << "Sell stock on day " << sellDays[i] << " (" << prices[sellDays[i] - 1] << ")\n";
    }
    
    return 0;
}
