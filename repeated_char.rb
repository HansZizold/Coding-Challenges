# Given some random string, return the first repeated character in it, or null if there is no one. For example, given the string "acdeeakds", return "e". Given the string "abcdefgh", return null. 

def repeated (str)  
  tmparr = ''
  str.each_char { |c|
    if tmparr.include? c
      return c
    end
    tmparr << c
  }
  false
end
puts repeated('acdeks')
