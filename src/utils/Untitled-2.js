
const TEST_SIZE = 30;

export const createTestQuestion = () => {
    const testQuestions = [];
    const set = new Set();
    while (set.size !== TEST_SIZE) {
        const randomNumber = Math.floor(Math.random() * questions.length);
        set.add(Math.floor(Math.random() * questions.length))
    }
    
    console.log(set, set.size);
    
    const selectedQuestions = Array.from(set).map(number => questions[number]);

    // while (testQuestions.length < 30) {
    //     const randomIndex = Math.floor(Math.random() * questions.length);
    //     if (!testQuestions.includes(questions[randomIndex])) {
    //         testQuestions.push(questions[randomIndex]);
    //     }
    // }
    // const test = testQuestions.map((question) => {
    //     return {
    //         ...question,
    //         // selectedAnswer: "0",
    //         // score: 0
    //     }
    // });
    return testQuestions;
}

createTestQuestion()