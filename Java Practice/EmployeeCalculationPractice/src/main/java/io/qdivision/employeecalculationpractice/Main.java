package io.qdivision.employeecalculationpractice;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class Main {
    public static void main(String[] args) {

        Main main = new Main();
        EmployeeService employeeService = new EmployeeService();

        PerformanceLevel performanceLevelBaguette_2017 = new PerformanceLevel(2017, 1);
        PerformanceLevel performanceLevelBaguette_2018 = new PerformanceLevel(2018, 1);
        PerformanceLevel performanceLevelBaguette_2019 = new PerformanceLevel(2019, 1);
        List<PerformanceLevel> performanceLevelsBaguette = new ArrayList<PerformanceLevel>();
        performanceLevelsBaguette.add(performanceLevelBaguette_2017);
        performanceLevelsBaguette.add(performanceLevelBaguette_2018);
        performanceLevelsBaguette.add(performanceLevelBaguette_2019);
        Address address1Baguette = new Address("123 Spaghetti Lane", "", "Houndville", "TX", 34567, "Residence");
        List<Address> addressesBaguette = new ArrayList<Address>();
        addressesBaguette.add(address1Baguette);

        PerformanceLevel performanceLevelPi_2017 = new PerformanceLevel(2017, 2);
        PerformanceLevel performanceLevelPi_2018 = new PerformanceLevel(2018, 3);
        PerformanceLevel performanceLevelPi_2019 = new PerformanceLevel(2019, 4);
        List<PerformanceLevel> performanceLevelsPi = new ArrayList<PerformanceLevel>();
        performanceLevelsPi.add(performanceLevelPi_2017);
        performanceLevelsPi.add(performanceLevelPi_2018);
        performanceLevelsPi.add(performanceLevelPi_2019);
        Address address1Pi = new Address("6534 Bradley Ave", "", "St. Louis", "MO", 23456, "Residence");
        List<Address> addressesPi = new ArrayList<Address>();
        addressesPi.add(address1Pi);

        PerformanceLevel performanceLevelFable_2017 = new PerformanceLevel(2017, 3);
        PerformanceLevel performanceLevelFable_2018 = new PerformanceLevel(2018, 4);
        PerformanceLevel performanceLevelFable_2019 = new PerformanceLevel(2019, 4);
        List<PerformanceLevel> performanceLevelsFable = new ArrayList<PerformanceLevel>();
        performanceLevelsFable.add(performanceLevelFable_2017);
        performanceLevelsFable.add(performanceLevelFable_2018);
        performanceLevelsFable.add(performanceLevelFable_2019);
        Address address1Fable = new Address("171 Amherst", "", "San Diego", "CA", 12345, "Residence");
        List<Address> addressesFable = new ArrayList<Address>();
        addressesFable.add(address1Fable);

        PerformanceLevel performanceLevelBob_2017 = new PerformanceLevel(2017, 2);
        PerformanceLevel performanceLevelBob_2018 = new PerformanceLevel(2018, 2);
        PerformanceLevel performanceLevelBob_2019 = new PerformanceLevel(2019, 3);
        List<PerformanceLevel> performanceLevelsBob = new ArrayList<PerformanceLevel>();
        performanceLevelsBob.add(performanceLevelBob_2017);
        performanceLevelsBob.add(performanceLevelBob_2018);
        performanceLevelsBob.add(performanceLevelBob_2019);
        Address address1Bob = new Address("123 Bob Street", "", "Bobville", "MO", 45678, "Residence");
        List<Address> addressesBob = new ArrayList<Address>();
        addressesBob.add(address1Bob);

        PerformanceLevel performanceLevelRob_2017 = new PerformanceLevel(2017, 4);
        PerformanceLevel performanceLevelRob_2018 = new PerformanceLevel(2018, 4);
        PerformanceLevel performanceLevelRob_2019 = new PerformanceLevel(2019, 4);
        List<PerformanceLevel> performanceLevelsRob = new ArrayList<PerformanceLevel>();
        performanceLevelsRob.add(performanceLevelRob_2017);
        performanceLevelsRob.add(performanceLevelRob_2018);
        performanceLevelsRob.add(performanceLevelRob_2019);
        Address address1Rob = new Address("123 Rob Street", "", "Robville", "CA", 56789, "Residence");
        List<Address> addressesRob = new ArrayList<Address>();
        addressesRob.add(address1Rob);

        PerformanceLevel performanceLevelBobJr_2017 = new PerformanceLevel(2017, 1);
        PerformanceLevel performanceLevelBobJr_2018 = new PerformanceLevel(2018, 2);
        PerformanceLevel performanceLevelBobJr_2019 = new PerformanceLevel(2019, 2);
        List<PerformanceLevel> performanceLevelsBobJr = new ArrayList<PerformanceLevel>();
        performanceLevelsBobJr.add(performanceLevelBobJr_2017);
        performanceLevelsBobJr.add(performanceLevelBobJr_2018);
        performanceLevelsBobJr.add(performanceLevelBobJr_2019);
        Address address1BobJr = new Address("123 Junior Street", "", "Juniorville", "TX", 67890, "Residence");
        List<Address> addressesBobJr = new ArrayList<Address>();
        addressesBobJr.add(address1BobJr);


        Employee baguette = new Employee("Baguette", 7, new BigDecimal("1000000.00"), performanceLevelsBaguette, addressesBaguette, "IT");
        Employee pi = new Employee("Pi", 2, new BigDecimal("250000.00"), performanceLevelsPi, addressesPi, "SALES");
        Employee fable = new Employee("Fable", 8, new BigDecimal("800000.00"), performanceLevelsFable, addressesFable, "IT");
        Employee bob = new Employee("Bob", 33, new BigDecimal("50000.00"), performanceLevelsBob, addressesBob, "SALES");
        Employee rob = new Employee("Rob", 45, new BigDecimal("40000.00"), performanceLevelsRob, addressesRob, "IT");
        Employee bobJr = new Employee("Bob Jr.", 18, new BigDecimal("60000.00"), performanceLevelsBobJr, addressesBobJr, "SALES");


        List<Employee> employeeList = Arrays.asList(baguette, pi, fable, bob, rob, bobJr);

        employeeService.getTotalSalaryExpenses(employeeList);
        employeeService.getTotalSalaries(employeeList);
    }}