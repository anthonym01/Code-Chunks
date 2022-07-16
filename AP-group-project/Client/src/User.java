package com.company;

public abstract class User {

    protected String firstName;
    protected String lastName;
    protected String idNum;
    protected String password;

    // default constructor
    public User() {
        firstName = null;
        lastName = null;
        idNum = null;
        password = null;
    }

    // primary constructor
    public User(String _firstName, String _lastName, String _idNum, String _password){
        firstName = _firstName;
        lastName = _lastName;
        idNum = _idNum;
        password = _password;
    }

    //copy constructor
    public User(User _user){
        firstName = _user.firstName;
        lastName = _user.lastName;
        idNum = _user.idNum;
        password = _user.password;
    }

    // return User firstName
    public String getFirstName(){return firstName;}
    // sets User firstname
    public void setFirstName(String firstName){this.firstName=firstName;}

    // return User lastName
    public String getLastName(){return lastName;}
    // sets User lastName
    public void setLastName(String lastName){this.lastName=lastName;}

    // return User idNum
    public String getIdNum() {return idNum;}
    // sets User idNum
    public void setIdNum(String idNum) {this.idNum = idNum;}

    // return User password
    public String getPassword() {return password;}
    // sets User password
    public void setPassword(String password) {this.password = password;}

    public abstract String[] Detail();
}
