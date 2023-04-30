class Tst
  puts "hola"
  puts self
  def tests
    a = false

    if (!a)
      return false
    end

    return true
  end
end

test1 = Tst.new()
puts test1.tests