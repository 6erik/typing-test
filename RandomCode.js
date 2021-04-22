class RandomCode {
    constructor() {
    }

    generateCodeBlock() {
        var codeBlock;
        let topBlock = this.genTopBlock();
        let innerBlock = this.genInnerBlock();
        let bottomBlock = "}\n}";

        codeBlock = topBlock + innerBlock + bottomBlock;
        return codeBlock;
    }
    genTopBlock() {
        var topBlock;
        let topBlockArr1 = ["HelloWorld ", "HelloCountry ", "TestProgram ", "TypingTest ", "GarbageClass ", "FakeApplication "];
        
        topBlock = "public class " + topBlockArr1[Math.floor(Math.random() * topBlockArr1.length)] + "{\npublic static void main(String[] args) {\n";
        return topBlock;
    }

    genInnerBlock() {
        var innerBlock;
        let innerBlockArr = [];
        innerBlockArr.push("for (int i = 0; i < 5; i++) {\nSystem.out.println(i);\n}\n"); // for loop
        innerBlockArr.push("int i = 0;\nwhile (i < 5) {\nSystem.out.println(i);\ni++;\n}\n"); // while loop
        innerBlockArr.push('int x = 20;\nint y = 18;\nif (x > y) {\nSystem.out.println("x is greater than y");\n}\n'); // if statement

        innerBlock = innerBlockArr[Math.floor(Math.random() * innerBlockArr.length)];
        return innerBlock;
    }
}