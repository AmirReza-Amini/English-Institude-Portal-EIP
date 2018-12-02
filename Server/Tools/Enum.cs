namespace Server.Tools
{
    public enum ProductType : byte
    {
        Coffee = 0,
        HotDrink = 1,
        Accessory = 2
    }

    public enum BasketStatus : byte
    {
        Created = 0,
        Paid = 1,
        Pending = 2,
        Checked = 3,
        ReadyToSend = 4,
        DeliveredToPost = 5,
        Recieved = 6,
        Canceled = 7
    }

    public enum UnitType : byte
    {
        Kiloogram = 0,
        Item = 1,
        Ton = 2,
        Pack = 3
    }
}
