class NumberConverter
  attr_reader :replace_rules

  def initialize(replace_rules)
    unless replace_rules.instance_of? Array
      raise ArgumentError.new("Argument should be Array.")
    end
    @replace_rules = replace_rules
  end

  def convert(n)
    self.replace_rules.reduce("") do |accum, current_rule|
      current_rule.replace(n, accum)
    end
  end
end
