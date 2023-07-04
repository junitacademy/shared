interface Question {
    content: string
}

interface Option {
    content: string,
    isCorrect?: true
}

interface Solution {
    content: string
}

export interface MCQ {
    question: Question,
    options: Option[],
    solution: Solution
}