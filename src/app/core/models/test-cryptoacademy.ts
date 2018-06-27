export class Test {
    id: number;
    questions: Question[];
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
