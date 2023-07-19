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
  end
end
