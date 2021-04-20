class RandomCode {
    constructor() {
        // line 1
        this.l1_1 = "public class ";
        this.l1_2arr = ["HelloWorld ", "HelloCountry ", "TestProgram ", "TypingTest ", "GarbageClass "];
        
        // line 2
        this.l2_1 = "public static void main(String[] args) {"

        // section 3
        this.l3_1 = "int i = 0;\n";
        this.l3_2 = "while (i < 5) {\n";
        this.l3_3 = "System.out.println(i);\n";
        this.l3_4 = "i++;\n";

        // misc characters
        this.lcb = "{";
        this.rcb = "}";
        this.nl = "\n";
    }

    generateCodeBlock() {
        var codeBlock;
        let l1_2= this.l1_2arr[Math.floor(Math.random() * this.l1_2arr.length)];
        let l1 = this.l1_1 + l1_2 + this.lcb + this.nl;
        let l2 = this.l2_1 + this.nl;
        let l3 = this.l3_1 + this.l3_2 + this.l3_3 + this.l3_4 + this.rcb + this.nl;
        let l4 = this.rcb + this.nl;
        let l5 = this.rcb;


        codeBlock = l1 + l2 + l3 + l4 + l5;
        return codeBlock;
    }
}