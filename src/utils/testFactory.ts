'use client'

import { Question, TestQuestion } from '@/utils/interfaces'; 
import questions from '@/utils/question.json';

export const createTestQuestion = (): TestQuestion[] => {
    const testQuestions : Question[] = [];
    while (testQuestions.length < 30) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!testQuestions.includes(questions[randomIndex])) {

            testQuestions.push(questions[randomIndex]);
            // testQuestions.at(-1).testIndex = testQuestions.length;
        }
    }
    const test = testQuestions.map((question, index) => {
        return {
            id: index.toString(),
            question,
            selectedAnswer: '0',
            score: 0
        }
    });
    return test;
}