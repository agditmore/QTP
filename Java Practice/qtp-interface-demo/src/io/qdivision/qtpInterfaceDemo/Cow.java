package io.qdivision.qtpInterfaceDemo;

public class Cow implements Animal, Mammals {
    public String makeSound(){
        return "moo moo";
    }
    public int legCount(){
        return 4;
    }
}
