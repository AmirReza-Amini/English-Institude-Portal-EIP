using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.DTO
{
    public enum BasketStatus2 : byte
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
}
