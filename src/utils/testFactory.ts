'use client'

import { Question} from '@/utils/interfaces'; 
import questions from '@/utils/question.json';

export const createTestQuestion = (): Question[] => {
    const testQuestions : Question[] = [];
    while (testQuestions.length < 30) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!testQuestions.includes(questions[randomIndex])) {
            testQuestions.push(questions[randomIndex]);
        }
    }
    const test = testQuestions.map((question) => {
        return {
            ...question,
            selectedAnswer: "0",
            score: 0
        }
    });
    return test;
}