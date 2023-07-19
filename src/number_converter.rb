class NumberConverter
  attr_reader :replace_rules, :fallback_rules

  def initialize(replace_rules, fallback_rules)
    unless replace_rules.instance_of? Array
      raise ArgumentError.new("Argument should be Array.")
    end

    unless fallback_rules.instance_of? Array
      raise ArgumentError.new("Argument should be Array.")
    end

    @replace_rules = replace_rules
    @fallback_rules = fallback_rules
  end

  def convert(n)
    result =
      self.replace_rules.reduce("") do |accum, current_rule|
        accum + current_rule.replace(n)
      end

    if result == ""
      result =
        self.fallback_rules.reduce("") do |accum, current_rule|
          accum + current_rule.replace(n)
        end
    end

    return result
  end
end
