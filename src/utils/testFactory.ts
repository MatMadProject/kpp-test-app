import { Question} from '@/utils/interfaces'; 
import questions from '@/utils/question.json';

const TEST_SIZE = 30;

export async function createTestQuestion(): Promise<Question[]> {
    const uniqueNumbersSet = new Set<number>();

    while (uniqueNumbersSet.size !== TEST_SIZE) {
        const randomNumber = Math.floor(Math.random() * questions.length);
        uniqueNumbersSet.add(randomNumber)
    }

    return Array.from(uniqueNumbersSet).map(number => questions[number]);
}

export async function validateAnswers(answers: Record<string, string>) {
    return Object.entries(answers).reduce((acc, [questionId, answerId]) => {
        const question = questions.find(el => el.id === questionId);
        if (question) {
            return {...acc, [questionId]: {selectedAnswer: answerId, isCorrect: question.correctAnswer === answerId}}
        }
    }, {})
}