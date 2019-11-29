using Breadshop.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Breadshop.Shared.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Breadshop.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {       

        private readonly ILogger<CustomersController> logger;
        private readonly BreadshopContext _context;

        public CustomersController(ILogger<CustomersController> logger, BreadshopContext context)
        {
            this.logger = logger;
            _context = context;
        }

        [HttpGet]
        public Task<List<Customer>> Get()
        {
            return _context.Customers.ToListAsync();
        }
    }
}
