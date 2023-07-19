require_relative "../src/path_through_rule"

RSpec.describe PathThroughRule do
  describe "#replace" do
    subject { @rule.replace(input) }
    before { @rule = PathThroughRule.new }

    context "入力が1の時" do
      let(:input) { 1 }
      it { should eq "1" }
    end

    context "入力が3の時" do
      let(:input) { 3 }
      it { should eq "3" }
    end

    context "入力が333の時" do
      let(:input) { 3333 }
      it { should eq "3333" }
    end
  end
end
