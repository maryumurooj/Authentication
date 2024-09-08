using Microsoft.AspNetCore.Mvc;
using AuthApi.Data;
using AuthApi.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace AuthApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthDbContext _context;

        public AuthController(AuthDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User login)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == login.Email && u.Password == login.Password);
            if (user != null)
            {
                return Ok(new { message = "Login successful" });
            }
            return Unauthorized(new { message = "Invalid credentials" });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
             return BadRequest("User already exists.");
             }

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return Ok("User registered successfully.");
}

    }

}
