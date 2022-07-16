package ORM;

public class Equipment {// Equipment datatype
    private String rentid;
    private String Name;
    private String type;
    private boolean Rented;
    private String Renteddate;
    private String returndate;

    public String getRentid() {
		return rentid;
	}

	public void setRentid(String rentid) {
		this.rentid = rentid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isRented() {
		return Rented;
	}

	public void setRented(boolean rented) {
		Rented = rented;
	}

	public String getRenteddate() {
		return Renteddate;
	}

	public void setRenteddate(String renteddate) {
		Renteddate = renteddate;
	}

	public String getReturndate() {
		return returndate;
	}

	public void setReturndate(String returndate) {
		this.returndate = returndate;
	}

	public void setName(String name) {
		Name = name;
	}

    public String getName() {
        return Name;
    }
    
	public Equipment() {

    }

    public Equipment(String rentid, String Name, String type, boolean Rented, String Renteddate, String returndate) {
        this.rentid = rentid;
        this.Name = Name;
        this.type = type;
        this.Rented = Rented;
        this.Renteddate = Renteddate;
        this.returndate = returndate;
    }
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        // TODO Auto-generated method stub
        return super.clone();
    }

	@Override
	public String toString() {
		return "Equipment [rentid=" + rentid + ", Name=" + Name + ", type=" + type + ", Rented=" + Rented
				+ ", Renteddate=" + Renteddate + ", returndate=" + returndate + "]";
	}
    
    


    
}