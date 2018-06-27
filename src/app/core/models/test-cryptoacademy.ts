export class Test {
    id: number;
    description: string;
    level: string;
    name: string;
    image: string;
    questions: Question[];
}

export class TestHistory {
    tests: TestResult[];
}

class TestResult {
    testId: number;
    questionId: number;
    selectedAnswer: number;
    correctAnswer: number;
}

class Question {
    id: number;
    type: string;
    body: QuestionBody;
    answers: Answer[];
    description: string;
}

class QuestionBody {
    text: string;
    image: string;
}

class Answer {
    id: number;
    text: string;
}
