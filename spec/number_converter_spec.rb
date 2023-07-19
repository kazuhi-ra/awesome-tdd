require_relative "../src/number_converter"
require_relative "../src/cylic_number_rule"
require_relative "../src/path_through_rule"

RSpec.describe NumberConverter do
  describe "#convert" do
    subject do
      converter = NumberConverter.new([
        CylicNumberRule.new(3, "Fizz"),
        CylicNumberRule.new(5, "Buzz"),
        PathThroughRule.new(),
      ])
      converter.convert(input)
    end

    context "1の時" do
      let(:input) { 1 }
      it { should eq "1" }
    end

    context "2の時" do
      let(:input) { 2 }
      it { should eq "2" }
    end

    context "3の時" do
      let(:input) { 3 }
      it { should eq "Fizz" }
    end

    context "4の時" do
      let(:input) { 4 }
      it { should eq "4" }
    end

    context "5の時" do
      let(:input) { 5 }
      it { should eq "Buzz" }
    end

    context "6の時" do
      let(:input) { 6 }
      it { should eq "Fizz" }
    end

    context "10の時" do
      let(:input) { 10 }
      it { should eq "Buzz" }
    end

    context "15の時" do
      let(:input) { 15 }
      it { should eq "FizzBuzz" }
    end

    context "30の時" do
      let(:input) { 30 }
      it { should eq "FizzBuzz" }
    end
  end
end
