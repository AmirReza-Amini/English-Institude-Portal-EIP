using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Model
{
    public class Baskets
    {
        public Baskets()
        {
            Id = new Guid();
        }
        [Key]
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsActive { get; set; }

        public ICollection<BasketDetail> Details { get; set; }
        public ICollection<BasketHistory> History { get; set; }

    }
}
