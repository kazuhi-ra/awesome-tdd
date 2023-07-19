require_relative "../src/number_converter"

RSpec.describe NumberConverter do
  before do
    @fizz_buzz = NumberConverter.new
  end

  describe "#converter" do
    it "1の時" do
      expect(@fizz_buzz.converter 1).to eq 1
    end

    it "2の時" do
      expect(@fizz_buzz.converter 2).to eq 2
    end
  end
end
