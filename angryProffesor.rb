def angryProfessor(k, a)
  # Write your code here
  
  ontime = 0
  # Compare the number of students with the allowed ones (k)

  # Iterate over the array
  a.each do |e| 
    # Count the number of students that arrived late (>0)
    ontime += 1 if e <= 0
  end

  return 'NO' if ontime >= k
  return 'YES'

end
puts(angryProfessor(2, [-1,-3,4,2]))
