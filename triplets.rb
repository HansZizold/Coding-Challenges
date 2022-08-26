# Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
# The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
# The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
# If a[i] > b[i], then Alice is awarded 1 point.
# If a[i] < b[i], then Bob is awarded 1 point.
# If a[i] = b[i], then neither person receives a point.
# Comparison points is the total points a person earned.
# The return nust be an array with Alice's score is in the first position, and Bob's score is in the second.

def triplets(a, b)
  ab = a.zip b
  points = [0, 0]

  ab.each do |e|
    points[0] += 1 if(e[0] > e[1])
    points[1] += 1 if(e[0] < e[1])
  end
  points
end

a = [1, 2, 3]
b = [3, 2, 1]
puts triplets(a, b)
