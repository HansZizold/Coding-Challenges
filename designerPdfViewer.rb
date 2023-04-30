def designerPdfViewer(h, word)
  # Write your code here

  # Define an array from a to z
  # Iterate over the letters of the word input
  # Find the height of each letter, and take the highest
  # Return the result: heigth * word.length
  
  highest = 0
  alphabet = ('a'..'z').to_a

  word.each_char do |letter| 
    index = alphabet.find_index(letter)
    highest = h[index] if h[index] > highest
  end

  highest * word.length
end

puts designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],'defz');
