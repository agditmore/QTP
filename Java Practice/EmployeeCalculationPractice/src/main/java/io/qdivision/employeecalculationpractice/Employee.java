package io.qdivision.employeecalculationpractice;

import java.math.BigDecimal;
import java.util.List;

public class Employee {
    private String name;
    private int age;
    private BigDecimal salary;
    private List<PerformanceLevel> performanceLevels;
    private List<Address> addresses;
    private String department;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public List<PerformanceLevel> getPerformanceLevels() {
        return performanceLevels;
    }

    public void setPerformanceLevels(List<PerformanceLevel> performanceLevels) {
        this.performanceLevels = performanceLevels;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Employee(String name, int age, BigDecimal salary, List<PerformanceLevel> performanceLevels, List<Address> addresses, String department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.performanceLevels = performanceLevels;
        this.addresses = addresses;
        this.department = department;
    }
}
