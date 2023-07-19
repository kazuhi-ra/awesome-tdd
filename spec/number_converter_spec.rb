require_relative "../src/number_converter"

RSpec.describe NumberConverter do
  describe "#convert" do
    subject { @fizz_buzz.convert(input) }
    before { @fizz_buzz = NumberConverter.new(rules) }

    context "ruleなし" do
      let(:rules) { [] }

      context "1の時" do
        let(:input) { 1 }
        it { should eq "" }
      end
    end

    context "ruleがある" do
      context "ruleが1つ" do
        let(:rules) do
          rule = double("rule")
          allow(rule).to receive(:replace).with(1).and_return("Replaced")
          [rule]
        end

        context "1の時" do
          let(:input) { 1 }
          it { should eq "Replaced" }
        end
      end

      context "ruleが2つ" do
        let(:rules) do
          rule1 = double("rule1")
          rule2 = double("rule2")
          allow(rule1).to receive(:replace).with(1).and_return("Fizz")
          allow(rule2).to receive(:replace).with(1).and_return("Buzz")
          [rule1, rule2]
        end

        context "1の時" do
          let(:input) { 1 }
          it { should eq "FizzBuzz" }
        end
      end
    end
  end
end
