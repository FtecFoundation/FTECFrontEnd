class Correct {
    correct: number;
    image: string;
}

export class Test {
    id: number;
    description: string;
    level: string;
    name: string;
    image: string;
    lastQuestion?: number;
    selectedAnswer?: number;
    correctAnswer?: Correct;
    questions: any;
    totalQuestions: number;
    passed?: number;
    type?: string;
}

export class TestHistory {
    tests: any;
}

export class QuestionsContainer {
    [id: string]: Question;
}

export class Question {
    type: string;
    body: QuestionBody;
    answer: Answer[];
    description: string;
}

export class QuestionBody {
    text: string;
    image: string;
}

class Answer {
    id: number;
    text: string;
}
