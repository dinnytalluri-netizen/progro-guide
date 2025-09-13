import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, BookOpen, CheckCircle, PlayCircle } from "lucide-react";

const tutorialSteps = [
  {
    id: 1,
    title: "Understanding Variables",
    description: "Learn how to declare and use variables in JavaScript",
    content: `Variables are containers for storing data values. In JavaScript, you can declare variables using 'let', 'const', or 'var'.

**Example:**
\`\`\`javascript
let userName = "Alice";
const PI = 3.14159;
var age = 25;
\`\`\`

**Key Points:**
• Use 'let' for variables that can change
• Use 'const' for constants that won't change
• Avoid 'var' in modern JavaScript`,
    codeExample: `// Variable declaration examples
let message = "Hello, World!";
const maxUsers = 100;

// Variables can be updated
message = "Welcome to programming!";

console.log(message); // Output: Welcome to programming!
console.log(maxUsers); // Output: 100`
  },
  {
    id: 2,
    title: "Functions and Parameters",
    description: "Master the fundamentals of creating and calling functions",
    content: `Functions are reusable blocks of code that perform specific tasks. They can accept parameters and return values.

**Syntax:**
\`\`\`javascript
function functionName(parameter1, parameter2) {
  // code to execute
  return result;
}
\`\`\`

**Key Concepts:**
• Functions help organize and reuse code
• Parameters allow functions to work with different data
• Return statements send values back to the caller`,
    codeExample: `// Function with parameters
function greetUser(name, timeOfDay) {
  const greeting = \`Good \${timeOfDay}, \${name}!\`;
  return greeting;
}

// Calling the function
const message = greetUser("Alice", "morning");
console.log(message); // Output: Good morning, Alice!`
  },
  {
    id: 3,
    title: "Conditional Logic",
    description: "Learn to make decisions in your code with if/else statements",
    content: `Conditional statements allow your program to make decisions based on different conditions.

**Basic Structure:**
\`\`\`javascript
if (condition) {
  // code if condition is true
} else if (anotherCondition) {
  // code for alternative condition
} else {
  // code if no conditions are true
}
\`\`\`

**Comparison Operators:**
• === (strict equality)
• !== (strict inequality)
• > (greater than)
• < (less than)`,
    codeExample: `// Conditional logic example
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  } else if (age >= 13) {
    return "You are a teenager";
  } else {
    return "You are a child";
  }
}

console.log(checkAge(25)); // Output: You are an adult
console.log(checkAge(16)); // Output: You are a teenager`
  }
];

const TutorialSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const progress = (currentStep / tutorialSteps.length) * 100;
  
  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < tutorialSteps.length - 1) {
      handleNext();
    }
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Tutorials</h2>
          <p className="text-xl text-muted-foreground">
            Step-by-step guided learning with hands-on examples
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Tutorial Content */}
        <Card className="p-8 bg-gradient-card border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{currentTutorial.title}</h3>
              <p className="text-muted-foreground">{currentTutorial.description}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Theory */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Concept Overview</h4>
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {currentTutorial.content}
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Try It Out</h4>
                <Button variant="ghost" size="sm">
                  <PlayCircle className="w-4 h-4" />
                  Run Code
                </Button>
              </div>
              <div className="bg-code-bg border border-code-border rounded-lg p-4">
                <pre className="text-sm text-foreground font-mono overflow-x-auto">
                  <code>{currentTutorial.codeExample}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep 
                      ? "bg-primary" 
                      : completedSteps.includes(index)
                      ? "bg-accent"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="hero" onClick={handleComplete}>
                {completedSteps.includes(currentStep) ? (
                  <CheckCircle className="w-4 h-4" />
                ) : null}
                {currentStep === tutorialSteps.length - 1 ? "Complete" : "Next"}
                {currentStep < tutorialSteps.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TutorialSection;