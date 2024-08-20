export interface Question{
    id: string
    question: string
    answer1: string
    answer2: string
    answer3: string
    answer4: string
    answer5: string
    correctAnswer: string
    image?: string
}

export interface TestQuestion{
    id: string
    question: Question
    selectedAnswer: string | "0"
    score: number | "0"
}