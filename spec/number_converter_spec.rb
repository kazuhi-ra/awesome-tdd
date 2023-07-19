require_relative "../src/number_converter"

describe "NumberConverter" do
  subject { NumberConverter.one }

  it { should eq 1 }
end
