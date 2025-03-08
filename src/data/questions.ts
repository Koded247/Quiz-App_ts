export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export const questions: QuizQuestion[] = [
  // Original Questions
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },

  // Food Questions
  {
    id: 3,
    question: "Which fruit is known for its spiky exterior and sweet, juicy flesh?",
    options: ["Pineapple", "Mango", "Kiwi", "Dragon Fruit"],
    correctAnswer: "Pineapple",
  },
  {
    id: 4,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: "Avocado",
  },
  {
    id: 5,
    question: "Which food is traditionally eaten on Thanksgiving in the United States?",
    options: ["Pizza", "Turkey", "Pasta", "Sushi"],
    correctAnswer: "Turkey",
  },
  {
    id: 6,
    question: "What type of cheese is most commonly used on pizza?",
    options: ["Cheddar", "Mozzarella", "Parmesan", "Gouda"],
    correctAnswer: "Mozzarella",
  },
  {
    id: 7,
    question: "Which spice is derived from the crocus flower?",
    options: ["Cinnamon", "Paprika", "Saffron", "Turmeric"],
    correctAnswer: "Saffron",
  },
  {
    id: 8,
    question: "What is the primary ingredient in sushi?",
    options: ["Rice", "Noodles", "Bread", "Potato"],
    correctAnswer: "Rice",
  },
  {
    id: 9,
    question: "Which nut is used to make marzipan?",
    options: ["Almond", "Peanut", "Walnut", "Cashew"],
    correctAnswer: "Almond",
  },
  {
    id: 10,
    question: "What fruit is known as the 'king of fruits' and has a strong smell?",
    options: ["Banana", "Durian", "Mango", "Papaya"],
    correctAnswer: "Durian",
  },

  // Animal Questions
  {
    id: 11,
    question: "Which animal is the largest land mammal?",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
    correctAnswer: "Elephant",
  },
  {
    id: 12,
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Greyhound"],
    correctAnswer: "Cheetah",
  },
  {
    id: 13,
    question: "Which bird is known for its black and white tuxedo-like appearance?",
    options: ["Penguin", "Ostrich", "Eagle", "Flamingo"],
    correctAnswer: "Penguin",
  },
  {
    id: 14,
    question: "What animal is famous for changing color to blend into its surroundings?",
    options: ["Chameleon", "Octopus", "Frog", "Snake"],
    correctAnswer: "Chameleon",
  },
  {
    id: 15,
    question: "Which mammal is known for its black and white stripes?",
    options: ["Tiger", "Zebra", "Panda", "Skunk"],
    correctAnswer: "Zebra",
  },
  {
    id: 16,
    question: "What is the largest species of fish in the ocean?",
    options: ["Great White Shark", "Whale Shark", "Blue Whale", "Manta Ray"],
    correctAnswer: "Whale Shark",
  },
  {
    id: 17,
    question: "Which animal is known as man’s best friend?",
    options: ["Cat", "Dog", "Horse", "Rabbit"],
    correctAnswer: "Dog",
  },
  {
    id: 18,
    question: "What animal has a long neck and eats leaves from tall trees?",
    options: ["Elephant", "Giraffe", "Kangaroo", "Koala"],
    correctAnswer: "Giraffe",
  },
  {
    id: 19,
    question: "Which insect is known for producing honey?",
    options: ["Ant", "Bee", "Wasp", "Butterfly"],
    correctAnswer: "Bee",
  },
  {
    id: 20,
    question: "What animal is the symbol of Australia and carries its young in a pouch?",
    options: ["Koala", "Kangaroo", "Wombat", "Platypus"],
    correctAnswer: "Kangaroo",
  },
]