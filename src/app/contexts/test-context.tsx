"use client";
import { Question } from "@/utils/interfaces";
import { createTestQuestion } from "@/utils/testFactory";
import { createContext, ReactNode } from "react";

interface ITestContext {
  questions: Question[];
}

export const TestContext = createContext<ITestContext>({
  questions: [],
});

interface Props {
  children: ReactNode;
}
export const TestContextProvider = ({ children }: Props) => {
  const testQuestions = createTestQuestion();
  return (
    <TestContext.Provider value={{ questions: testQuestions }}>
      {children}
    </TestContext.Provider>
  );
};
