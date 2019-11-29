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
    public class ProductsController : ControllerBase
    {       

        private readonly ILogger<ProductsController> logger;
        private readonly BreadshopContext _context;

        public ProductsController(ILogger<ProductsController> logger, BreadshopContext context)
        {
            this.logger = logger;
            _context = context;
        }

        [HttpGet]
        public Task<List<Product>> Get()
        {
            return _context.Products.ToListAsync();
        }



        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create(Product product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = product.Id }, product);
        }

    }
}