package io.qdivision.employeecalculationpractice;

import java.math.BigDecimal;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


public class EmployeeService {
    private Map<Integer, BigDecimal> performanceLevelMap=new HashMap<Integer, BigDecimal>();
    private Map<String, BigDecimal> stateSalaryTaxMap=new HashMap<String, BigDecimal>();
    private Map<String, BigDecimal> stateBonusTaxMap=new HashMap<String, BigDecimal>();
    private Map<String, BigDecimal> totalITSalaryMap= new HashMap<String, BigDecimal>();
    private Map<String, BigDecimal> totalSalesSalaryMap = new HashMap<String, BigDecimal>();

    public EmployeeService() {
        performanceLevelMap.put(1, new BigDecimal("0.5"));
        performanceLevelMap.put(2, new BigDecimal("0.4"));
        performanceLevelMap.put(3, new BigDecimal("0.3"));
        performanceLevelMap.put(4, new BigDecimal("0.1"));

        stateSalaryTaxMap.put("TX", new BigDecimal("0.0"));
        stateSalaryTaxMap.put("MO", new BigDecimal("0.1"));
        stateSalaryTaxMap.put("CA", new BigDecimal("0.12"));

        stateBonusTaxMap.put("TX", new BigDecimal("0.03"));
        stateBonusTaxMap.put("MO", new BigDecimal("0.15"));
        stateBonusTaxMap.put("CA", new BigDecimal("0.20"));
    }

    //use enum file to avoid typo problems

    public void printSalaryDetails(Employee employee){
        BigDecimal bonus=null;
        for (PerformanceLevel performanceLevel: employee.getPerformanceLevels()){
            bonus=employee.getSalary().multiply(performanceLevelMap.get(performanceLevel.getLevel()));
            String state=employee.getAddresses().stream()
                    .filter(address->address.getAddressType().equals("Residence"))
                    .map(address->address.getState())
                    .findFirst().orElse(null);
            BigDecimal taxOnSalary=employee.getSalary().multiply(stateSalaryTaxMap.get(state));
            BigDecimal taxOnBonus=bonus.multiply(stateBonusTaxMap.get(state));

            //System.out.println("In "+performanceLevel.getYear()+", Employee "+employee.getName()+" had tax $"+taxOnSalary.intValue()+" on salary in year and tax $"+taxOnBonus.intValue()+" on bonus $"+bonus.intValue()+", and his total take home was $"+employee.getSalary().add(bonus).subtract(taxOnSalary).subtract(taxOnBonus).intValue());
        }
    }

    public void getTotalSalaryExpenses(List<Employee> employeeList){
        BigDecimal totalIT = new BigDecimal(0.00);
        BigDecimal totalSales = new BigDecimal(0.00);
        for (Employee employee : employeeList){
            for (PerformanceLevel performanceLevel: employee.getPerformanceLevels()){
                BigDecimal bonus=employee.getSalary().multiply(performanceLevelMap.get(performanceLevel.getLevel()));
                if (employee.getDepartment() == "IT"){
                    totalIT = totalIT.add(employee.getSalary()).add(bonus);
                } else {
                    totalSales = totalSales.add(employee.getSalary()).add(bonus);
                }
            }
        }
        System.out.println("The total salary expense for IT was $"+totalIT.intValue()+", and the total salary expense for Sales was $"+totalSales.intValue());
    }

    public void getTotalSalaries(List<Employee> employeeList){
        for (Employee employee : employeeList){
            BigDecimal totalIndividualSalary = new BigDecimal(0.00);
            for (PerformanceLevel performanceLevel: employee.getPerformanceLevels()){
                BigDecimal bonus=employee.getSalary().multiply(performanceLevelMap.get(performanceLevel.getLevel()));
                totalIndividualSalary = totalIndividualSalary.add(employee.getSalary()).add(bonus);
            }
            if (employee.getDepartment().equals("IT")) {
                totalITSalaryMap.put(employee.getName(), totalIndividualSalary);
            } else {
                totalSalesSalaryMap.put(employee.getName(), totalIndividualSalary);
            }
        }
        System.out.println("The highest earner in IT is "+printHighestEarner(totalITSalaryMap)+", and the highest earner in Sales is "+printHighestEarner(totalSalesSalaryMap));

    }

    public <String, BigDecimal extends Comparable<BigDecimal>> String printHighestEarner(Map<String, BigDecimal> map){
        Optional<Map.Entry<String, BigDecimal>> highestITEarner = map.entrySet().stream().max((e1, e2) -> e1.getValue().compareTo(e2.getValue()));
        return highestITEarner.get().getKey();
    }
}
