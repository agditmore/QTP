package io.qdivision.employeecalculationpractice;

import lombok.Data;

@Data
public class Address {
    private String streetName1;
    private String streetName2;
    private String city;
    private String state;
    private int zipCode;
    private String addressType;

    public String getStreetName1(){
        return streetName1;
    }
    public void setStreetName1(String streetName1){
        this.streetName1 = streetName1;
    }

    public String getStreetName2(){
        return streetName2;
    }
    public void setStreetName2(String streetName2){
        this.streetName2 = streetName2;
    }

    public String getCity(){
        return city;
    }
    public void setCity(String city){
        this.city = city;
    }

    public String getState(){
        return state;
    }
    public void setState(String state){
        this.state = state;
    }

    public int getZipCode(){
        return zipCode;
    }
    public void setZipCode(int zipCode){
        this.zipCode = zipCode;
    }

    public String getAddressType(){
        return addressType;
    }
    public void setAddressType(String addressType){
        this.addressType = addressType;
    }

    public Address(String streetName1, String streetName2, String city, String state, int zipCode, String addressType) {
        this.streetName1 = streetName1;
        this.streetName2 = streetName2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.addressType = addressType;
    }
}
