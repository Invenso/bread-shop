using Breadshop.Shared.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Breadshop.Shared
{
    public class BreadshopContext : DbContext
    {
        public BreadshopContext(DbContextOptions<BreadshopContext> options) : base(options)
        { }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
