package ORM;

public class User {// User datatype
    private String Username;// username
    private String password;// users password
    private boolean type;// Type of user, customer or employee
    private String rentid;// id of the item this user has rented

    public User() {

    }

    public User(String Username, String password, boolean type, String rentid) {
        this.Username = Username;
        this.password = password;
        this.type = (boolean) type;
        this.rentid = rentid;
    }
}