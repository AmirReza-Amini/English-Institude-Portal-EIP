using Server.Tools;
using System;
using System.Collections.Generic;

namespace Server.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; }
        public int CriticalQuantity { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = "";
        public string Description { get; set; } = "---";
        public ProductType ProductType { get; set; }
        public UnitType UnitType { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public bool IsExist { get; set; } = true;
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public ICollection<BasketDetail> BasketDetails { get; set; }
    }
}
