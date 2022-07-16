package com.company;


public abstract class Inventory {

    protected String serialNum;
    protected boolean itemState;
    protected int itemQuantity;
    protected String itemName;

    // default constructor
    public Inventory() {
        serialNum = null;
        itemState = false;
        itemName = null;
        itemQuantity = 0;
    }

    // primary constructor
    public Inventory(String _serialNum, boolean _itemState, int _itemQuatity, String _itemName){
        serialNum = _serialNum;
        itemState = _itemState;
        itemQuantity = _itemQuatity;
        itemName = _itemName;
    }

    //copy constructor
    public Inventory(Inventory _Inventory){
        serialNum = _Inventory.serialNum;
        itemState = _Inventory.itemState;
        itemName = _Inventory.itemName;
        itemQuantity = _Inventory.itemQuantity;
    }

    // return User serialNum
    public String getSerialNum(){return serialNum;}
    // sets User serialNum
    public void setSerialNum(String serialNum){this.serialNum=serialNum;}

    // return User itemState
    public boolean getItemState(){return itemState;}
    // sets User itemState
    public void setItemState(boolean itemState){this.itemState=itemState;}

    // return User itemQuantity
    public int getItemQuantity() {return itemQuantity;}
    // sets User itemQuantity
    public void setItemQuantity(int itemQuantity) {this.itemQuantity = itemQuantity;}

    // return User password
    public String getItemName() {return itemName;}
    // sets User password
    public void setItemName(String itemName) {this.itemName = itemName;}


}