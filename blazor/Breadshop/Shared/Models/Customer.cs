using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Breadshop.Shared.Models
{
    [Table("customer")]
    public class Customer
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [Column("first_name")]
        public string FirstName
        {
            get; set;
        }

        [Required]
        [Column("last_name")]
        public string LastName
        {
            get; set;
        }

        [Required]
        [Column("email")]
        public string Email
        {
            get; set;
        }
    }
}

