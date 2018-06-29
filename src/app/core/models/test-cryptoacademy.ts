export class Test {
    id: number;
    description: string;
    level: string;
    name: string;
    image: string;
    lastQuestion: number;
    questions: Question[];
}

export class TestHistory {
    tests: any;
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
