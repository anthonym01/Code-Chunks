package com.company;

public class Customer extends User{
    protected String email;

    public Customer(){
        email = null;
    }

    public Customer (String _firstName, String _lastName, String _idNum, String _password){
        super(_firstName, _lastName, _idNum, _password);
    }

    public Customer (String _email){
        email = _email;
    }

    @Override
    public String[] Detail() {
        return new String[] {firstName, lastName, idNum, password};
    }


}
