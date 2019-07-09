package CalculatorFunctions;

import java.math.BigDecimal;

public class BasicMathFunctionality {
    public static void addition(BigDecimal x, BigDecimal y){
        System.out.println(x.add(y));
    }

    public static void subtraction(BigDecimal x, BigDecimal y){
        System.out.println(x.subtract(y));
    }

    public static void multiplication(BigDecimal x, BigDecimal y){
        System.out.println(x.multiply(y));
    }

    public static void division(BigDecimal x, BigDecimal y){
        System.out.println(x.divide(y));
    }
}
