using Server.Tools;
using System;

namespace Server.Model
{
    public class BasketHistory
    {
        public int Id { get; set; }
        public BasketStatus Status { get; set; }
        public DateTime StatusDateTime { get; set; }
        public Guid BasketId { get; set; }
        public virtual Baskets Basket { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}