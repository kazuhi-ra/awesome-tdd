class NumberConverter
  def converter(n)
    if n % 3 == 0
      "Fizz"
    else
      if n % 5 == 0
        "Buzz"
      else
        n.to_s
      end
    end
  end
end
