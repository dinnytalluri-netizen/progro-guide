import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, Target, Zap } from "lucide-react";

const exercises = [
  {
    id: 1,
    title: "Array Manipulation Basics",
    description: "Learn fundamental array operations like sorting, filtering, and mapping",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Arrays", "Methods", "Iteration"],
    color: "accent"
  },
  {
    id: 2,
    title: "Recursive Problem Solving",
    description: "Master recursion with classic problems like factorial and tree traversal",
    difficulty: "Intermediate",
    duration: "30 min",
    topics: ["Recursion", "Trees", "Math"],
    color: "primary"
  },
  {
    id: 3,
    title: "Async JavaScript Patterns",
    description: "Understand promises, async/await, and error handling in asynchronous code",
    difficulty: "Advanced",
    duration: "45 min",
    topics: ["Promises", "Async", "Error Handling"],
    color: "secondary"
  },
  {
    id: 4,
    title: "Data Structure Design",
    description: "Implement custom data structures like stacks, queues, and linked lists",
    difficulty: "Intermediate",
    duration: "40 min",
    topics: ["Data Structures", "OOP", "Memory"],
    color: "primary"
  },
  {
    id: 5,
    title: "Algorithm Optimization",
    description: "Learn to analyze and improve algorithm efficiency and time complexity",
    difficulty: "Advanced",
    duration: "60 min",
    topics: ["Big O", "Optimization", "Performance"],
    color: "secondary"
  },
  {
    id: 6,
    title: "Debugging Challenges",
    description: "Find and fix bugs in broken code snippets across different scenarios",
    difficulty: "Beginner",
    duration: "20 min",
    topics: ["Debugging", "Logic", "Testing"],
    color: "accent"
  }
];

const getDifficultyIcon = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return <Target className="w-4 h-4" />;
    case "Intermediate": return <Zap className="w-4 h-4" />;
    case "Advanced": return <Trophy className="w-4 h-4" />;
    default: return <Target className="w-4 h-4" />;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-accent/10 text-accent";
    case "Intermediate": return "bg-primary/10 text-primary";
    case "Advanced": return "bg-secondary/10 text-secondary";
    default: return "bg-muted/10 text-muted-foreground";
  }
};

const ExerciseGrid = () => {
  return (
    <section className="py-16 px-6 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Programming Exercises</h2>
          <p className="text-xl text-muted-foreground">
            Choose from our curated collection of coding challenges and practice problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="p-6 bg-gradient-card border-border hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${getDifficultyColor(exercise.difficulty)}`}>
                  {getDifficultyIcon(exercise.difficulty)}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {exercise.duration}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {exercise.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {exercise.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exercise.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {exercise.difficulty}
                </Badge>
                <Button variant="exercise" size="sm">
                  Start Exercise
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Exercises
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExerciseGrid;