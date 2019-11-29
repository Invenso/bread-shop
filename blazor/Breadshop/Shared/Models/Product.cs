using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Breadshop.Shared.Models
{
    [Table("product")]
    public class Product
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [Column("name")]
        public string Name
        {
            get; set;
        }

        [Required]
        [Column("description")]
        public string Description
        {
            get; set;
        }

        [Required]
        [Column("price")]
        public decimal Price
        {
            get; set;
        }

        [Required]
        [Column("unit")]
        public string Unit
        {
            get; set;
        }

    }
}
