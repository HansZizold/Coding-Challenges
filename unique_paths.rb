# There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

# Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

def unique_paths(m, n)
  # Create an empty array, size mxn filled with '0'
  dp = Array.new(m) { Array.new(n, 0) }
  
  # Initialize the array with '1' in first row and column
  for i in 0...m
    dp[i][0] = 1
  end
  for i in 0...n
    dp[0][i] = 1
  end

  # The number of possibilities to reach the (i,j) position is equal to the sum of (i-1,j) plus (i,j-1)
  for i in 1...m
    for j in 1...n
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    end
  end

  dp[m-1][n-1]
end

puts unique_paths(3,7)