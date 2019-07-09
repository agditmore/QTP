package io.qdivision.qtpInterfaceDemo;

public class Main {
    public static void main(String[] args) {
        Dog dog=new Dog();
        AnimalService animalService = new AnimalService();
        animalService.printAnimalDetails(dog);
        Pig pig = new Pig();
        animalService.printAnimalDetails(pig);
    }
}
