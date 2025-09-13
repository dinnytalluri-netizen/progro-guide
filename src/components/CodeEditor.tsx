import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Play, Brain, Bug, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(`**Code Analysis:**
      
This is a recursive implementation of the Fibonacci sequence:

🔍 **Function Purpose:** Calculates the nth Fibonacci number
📝 **Algorithm:** Uses recursion with base case (n ≤ 1)
⚡ **Time Complexity:** O(2^n) - exponential
🎯 **Key Concepts:** Recursion, base cases, mathematical sequences

**Potential Issues:**
- Inefficient for large values due to repeated calculations
- No input validation for negative numbers

**Suggestions:**
- Consider using memoization or iterative approach for better performance
- Add input validation`);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "Code has been copied to clipboard.",
    });
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Code Analysis</h2>
          <p className="text-xl text-muted-foreground">
            Paste your code and get instant explanations, debugging help, and optimization suggestions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Input */}
          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Code</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="code" size="sm">
                  JavaScript
                </Button>
              </div>
            </div>
            
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="min-h-[300px] font-mono text-sm bg-code-bg border-code-border"
            />
            
            <div className="flex gap-3 mt-4">
              <Button variant="hero" onClick={handleAnalyze} disabled={isAnalyzing}>
                <Brain className="w-4 h-4" />
                {isAnalyzing ? "Analyzing..." : "Analyze Code"}
              </Button>
              <Button variant="outline">
                <Play className="w-4 h-4" />
                Run Code
              </Button>
              <Button variant="outline">
                <Bug className="w-4 h-4" />
                Debug
              </Button>
            </div>
          </Card>

          {/* Analysis Results */}
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold mb-4">AI Analysis</h3>
            
            {analysis ? (
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                  {analysis}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Click "Analyze Code" to get AI-powered insights about your code</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;