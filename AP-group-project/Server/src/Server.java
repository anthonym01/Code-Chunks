
import java.sql.*;

public class Server {
    public static void main(String[] args) {
        Conman conman = new Conman();
        System.out.println("Start Server");
        try {

            Statement statement = conman.DC.createStatement();

            ResultSet resultequipment = statement.executeQuery("SELECT * FROM `equipment` ");

            System.out.println("\nEquipment: ");
            System.out.println("id | Name | Type | ");

            while (resultequipment.next()) {

                System.out.println(resultequipment.getString(1) + " | " + resultequipment.getString(2) + " | "
                        + resultequipment.getString(3) + " | " + resultequipment.getBoolean(4) + " | "
                        + resultequipment.getString(5) + " | " + resultequipment.getString(6));
            }

            System.out.println("\nUsers: ");
            ResultSet resultusers = statement.executeQuery("SELECT * FROM `Users` ");
            while (resultusers.next()) {
                System.out.println(resultusers.getString(1) + " | " + resultusers.getString(2) + " | "
                        + resultusers.getString(3) + " | " + resultusers.getString(4));
            }

            conman.close();

        } catch (Exception e) {
            // TODO: handle exception
            System.err.println(e);
        }
    }
}
