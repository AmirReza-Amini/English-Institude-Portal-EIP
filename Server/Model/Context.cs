using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Model
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            :base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Menu> Menu { get; set; }
        public DbSet<Baskets> Baskets { get; set; }
        public DbSet<BasketDetail> BasketDetail { get; set; }
        public DbSet<BasketHistory> BasketHistory { get; set; }
        public DbSet<Product> Products { get; set; }


    }
}
