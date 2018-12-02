using System;
using System.Collections.Generic;
using Server.Tools;

namespace Server.DTO
{
    public class BasketDTO
    {
        internal UnitType Unit { get; set; }
        internal DateTime CreateDateEn { get; set; }
        internal decimal Price => Quantity * Fee;
        internal decimal Fee { get; set; }
        internal DateTime StatusDateTimeEn { get; set; }
        internal int Quantity { get; set; }
        internal string Title { get; set; }
        internal string UnitType => Unit.ToUnitText();
        public Guid basketId { get; set; }
        public string CustomerName { get; set; }
        public string EmployeeName { get; set; }
        public decimal TotalPrice { get; set; }
        public string CreateDate => CreateDateEn.ToPersianDateTime();
        public string StatusDateTime => StatusDateTimeEn.ToPersianDateTime();
        public BasketStatus Status { get; set; }
    }

    public class BasketDetailDTO
    {
        internal UnitType UnitType { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public string Unit => UnitType.ToUnitText();
        public decimal TotalPrice => UnitPrice * Quantity;
    }
}
