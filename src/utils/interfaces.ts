export interface Question{
    id: string
    question: string | "loading..."
    answer1: string | "loading..."
    answer2: string | "loading..."
    answer3: string | "loading..."
    answer4: string | "loading..."
    answer5: string | "loading..."
    correctAnswer: string
    image?: string
    // selectedAnswer?: string | "0"
    // score?: number | 0
}
