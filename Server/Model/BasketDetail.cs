using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Model
{
    public class BasketDetail
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal Fee { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public Guid BasketId { get; set; }
        public Baskets Basket { get; set; }
    }
}
