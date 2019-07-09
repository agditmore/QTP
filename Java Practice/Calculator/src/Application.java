import java.math.BigDecimal;
import java.math.BigInteger;

import static CalculatorFunctions.BasicMathFunctionality.addition;
import static CalculatorFunctions.BasicMathFunctionality.subtraction;
import static CalculatorFunctions.BasicMathFunctionality.multiplication;
import static CalculatorFunctions.BasicMathFunctionality.division;

public class Application {
    private static BigDecimal x = new BigDecimal("5.0");
    private static BigDecimal y = new BigDecimal("2.0");

    public static void main(String[] args){
        addition(x, y);
        subtraction(x, y);
        multiplication(x, y);
        division(x, y);
    }
}
