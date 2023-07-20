require_relative "../src/cylic_number_rule"

RSpec.describe CylicNumberRule do
  describe "#replace" do
    subject { @rule.replace(input, result) }
    before { @rule = CylicNumberRule.new(base, replacement) }

    context "resultが空文字" do
      let(:result) { "" }

      context "3の倍数" do
        let(:base) { 3 }
        let(:replacement) { "Fizz" }

        context "入力が1の時" do
          let(:input) { 1 }
          it { should eq "" }
        end

        context "入力が3の時" do
          let(:input) { 3 }
          it { should eq "Fizz" }
        end

        context "入力が333の時" do
          let(:input) { 3333 }
          it { should eq "Fizz" }
        end
      end

      context "5の倍数" do
        let(:base) { 5 }
        let(:replacement) { "Buzz" }

        context "入力が1の時" do
          let(:input) { 1 }
          it { should eq "" }
        end

        context "入力が5の時" do
          let(:input) { 5 }
          it { should eq "Buzz" }
        end

        context "入力が575の時" do
          let(:input) { 575 }
          it { should eq "Buzz" }
        end
      end
    end

    context "resultが空文字ではない" do
      let(:result) { "kazuhi-ra" }

      context "3の倍数" do
        let(:base) { 3 }
        let(:replacement) { "Fizz" }

        context "入力が1の時" do
          let(:input) { 1 }
          it { should eq "kazuhi-ra" }
        end

        context "入力が3の時" do
          let(:input) { 3 }
          it { should eq "kazuhi-raFizz" }
        end

        context "入力が333の時" do
          let(:input) { 3333 }
          it { should eq "kazuhi-raFizz" }
        end
      end
    end
  end
end
