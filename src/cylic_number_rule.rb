class CylicNumberRule
  attr_reader :base, :replacement

  def initialize(base, replacement)
    unless base.instance_of? Integer
      raise ArgumentError.new("Argument should be Integer.")
    end

    unless replacement.instance_of? String
      raise ArgumentError.new("Argument should be String.")
    end

    @base = base
    @replacement = replacement
  end

  def replace(n)
    if n % self.base == 0
      self.replacement
    else
      ""
    end
  end
end
