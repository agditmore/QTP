package Employees;

public class Employees {
    String employeeName;
    int employeeAge;
    int employeeYear;
    int employeePerformanceLevel;
    int employeeSalary;

    public Employees(String name, int age, int year, int performanceLevel, int salary){
        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.println("Years with the company: "+year);
        System.out.println("Performance (out of five): "+performanceLevel);
        System.out.println("Current salary: $"+salary);
        System.out.println("------------------------------------------");
    }

    public static void main (String[] args){
        Employees baguette = new Employees("Baguette", 7, 4, 5, 1000000);
        Employees oliver = new Employees("Oliver", 7, 4, 3, 500000);
        Employees casper = new Employees( "Casper", 5, 2, 4, 300000);
        Employees pi = new Employees("Pi", 2, 1, 2, 100000);
        Employees tavi = new Employees("Tavi", 6, 3, 4, 400000);
    }
}
