package io.qdivision.employeecalculationpractice;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileReader;

public class ExceptionDemo {
    public static void main (String[] args){
        ExceptionDemo exceptionDemo=new ExceptionDemo();
//        System.out.println(exceptionDemo.calculator(10, 15, "ADD"));
//        System.out.println(exceptionDemo.calculator(10, 15, "SUBTRACT"));
//        System.out.println(exceptionDemo.calculator(10, 15, "MULTIPLY"));
//        try {
//            System.out.println(exceptionDemo.calculator(15, 0, "DIVIDE"));
//        } catch(ArithmeticException ae) {
//            System.out.println("Yikes");
//        }
//        System.out.println(exceptionDemo.calculator(15, 8, "AREA"));

        try {
            exceptionDemo.readFile();
        } catch (FileNotFoundException fne) {
            System.out.println("File not found" + fne.getMessage()); // getMessage on its own gets rid of stack trace... logging is preferable but requires dependencies (so not in example here)
            fne.printStackTrace();
        } catch (IOException ioe) {
            System.out.println("IOException");
        } finally { //finally is optional if there is a catch--if only runtime, you can use finally without catch
            System.out.println("will always run even if exception is not thrown");
        }

    }

    private int calculator(int a, int b, String operation) {
        switch(operation) {
            case "ADD":
                return a+b;
            case "SUBTRACT":
                return a-b;
            case "MULTIPLY":
                return a*b;
            case "DIVIDE":
                return a/b;
            default:
                throw new IllegalArgumentException("This calculator only supports additions, subtraction, multiplication, and division.");
        }
    }

    private void readFile() throws FileNotFoundException, IOException {
        FileReader fr=new FileReader("/Users/.../testfile.txt");
        int i;
        while ((i=fr.read())!=-1){
            System.out.println();
        }
    }
}
