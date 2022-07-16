import java.sql.*;

public class Conman {// Manage connection details
    final String dburl = "jdbc:mysql://localhost:3306/Grizzly";// Database
    Connection DC = null;// connection

    public Conman() {// default
        try {
            DC = DriverManager.getConnection(dburl, "root", "");// connect to database
            if (DC != null) {
                System.out.println("Connected to Grizzly database");
            } else {
                System.out.println("Connection failed?? " + DC);
            }
        } catch (Exception e) {// Exception
            System.err.println(e);
        }
    }

    public void close() {// close database connection
        try {
            DC.close();
        } catch (Exception e) {
            // TODO: handle exception
            System.err.println(e);
        }
    }
}