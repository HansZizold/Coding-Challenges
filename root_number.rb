# Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

# In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

# Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

# Make sure your algorithm is efficient, and analyze its time and space complexities.

def root(x, n)
  init = x.to_f / n
  tolerance = 1

  while tolerance > 0.001
    final =  (1 / n.to_f) * ((n.to_f - 1) * init + x.to_f / init ** (n.to_f - 1))
    tolerance = (final - init).abs
    init = final
  end
  final
end

puts root(7,3)

# Time complexity: O(log x)
# Space complexity: O(1)4