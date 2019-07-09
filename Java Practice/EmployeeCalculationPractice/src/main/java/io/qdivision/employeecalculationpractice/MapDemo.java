//package io.qdivision.employeecalculationpractice;
//
//import java.math.BigDecimal;
//import java.math.MathContext;
//import java.util.HashMap;
//import java.util.Map;
//
//public class MapDemo {
//    public static void main(String[] args) {
//        Map<String, BigDecimal> salaryTax=new HashMap<>();
//        salaryTax.put("TX", new BigDecimal(0.0));
//        salaryTax.put("MO", new BigDecimal(0.1));
//        salaryTax.put("CA", new BigDecimal(0.12));
//
//        System.out.println((salaryTax.get("MO")).round(new MathContext(2)));
//
////        for(Employee employee:employeeList){
////            System.out.println(employee.getAddresses().stream()
////              .filter(address=>address.getAddressType().equals("Residential")).map(address->address.getState())
////              .collect(Collectors.toList());
////        }
//    }
//}
