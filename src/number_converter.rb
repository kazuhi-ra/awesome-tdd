class NumberConverter
  attr_reader :replace_rules

  def initialize(replace_rules)
    unless replace_rules.instance_of? Array
      raise ArgumentError.new("Argument should be Array.")
    end
    @replace_rules = replace_rules
  end

  def convert(n)
    if @replace_rules.empty?
      ""
    else
      @replace_rules[0].replace(n)
    end
  end
end
