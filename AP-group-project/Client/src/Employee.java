package com.company;

public class Employee extends User{

    protected String position;

    public Employee(){
        position = null;
    }

    public Employee(String _firstName, String _lastName, String _idNum, String _password){
        super(_firstName, _lastName, _idNum, _password);
    }

    public Employee(String _position){
        position = _position;
    }

    public String getPosition(){return position;}

    public void setPosition(String position){this.position = position;}

    @Override
    public String[] Detail() {
        return new String[] {firstName, lastName, idNum, password};
    }
}
