using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Family { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public bool IsActive { get; set; }
        public ICollection<BasketHistory> BasketHistory { get; set; }
        public ICollection<Product> Products { get; set; }
        public string FullName => Name + " " + Family;

    }
}