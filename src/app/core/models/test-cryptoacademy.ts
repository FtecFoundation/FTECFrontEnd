export class Test {
    id: number;
    description: string;
    level: string;
    name: string;
    image: string;
    lastQuestion?: number;
    selectedAnswer?: number;
    correctAnswer?: number;
    questions: any;
    total?: number;
}

export class TestHistory {
    tests: any;
}

export class Question {
    id: number;
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
