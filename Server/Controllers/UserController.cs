using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DTO;
using Server.Model;
using Server.Tools;
using static Server.Tools.Extension;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly Context db;

        public UserController(Context db)
        {
            this.db = db;
        }
        // GET api/values
        [HttpGet]
        public async Task<ApiResultDTO> Get()
        {
            var data = (await db.Users.ToListAsync())
                .Select(m => new UserDTO
                {
                    Id = m.UserId,
                    BirthDate = m.BirthDate.ToSepratedPersianDate(),
                    Email = m.Email,
                    Name = m.Name,
                    Family = m.Family,
                    IsActive = m.IsActive
                }).ToList();

            return GetSuccessResult(data);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ApiResultDTO> Get(int id)
        {
            var data = await db.Users.Where(m => m.UserId == id).Select(m => new UserDTO
            {
                Id = m.UserId,
                BirthDate = m.BirthDate.ToSepratedPersianDate(),
                Email = m.Email,
                Name = m.Name,
                Family = m.Family,
                IsActive = m.IsActive
            }).FirstOrDefaultAsync();

            return data != null ? GetSuccessResult(data) : GetFailResult();
        }

        [HttpGet("toggle-ban/{id}")]
        public async Task<ApiResultDTO> ToggleBan(int id)
        {
            var user = await db.Users.FindAsync(id);
            user.IsActive = !user.IsActive;
            return await db.SaveChangesAsync() > 0 ? GetSuccessResult(user) : GetFailResult();
        }
        // POST api/values
        [HttpPost]
        public async Task<ApiResultDTO> Post([FromBody]UserDTO user)
        {
            if (user.Id == 0)
            {
                db.Users.Add(new User
                {
                    BirthDate = user.BirthDate.ArrayToDateTime(),
                    Email = user.Email,
                    Family = user.Family,
                    Name = user.Name,
                    IsActive = true,
                    Password = user.Password
                });
                return await db.SaveChangesAsync() > 0 ? GetSuccessResult(user) : GetFailResult();
            }
            var dbUser = db.Users.Find(user.Id);
            dbUser.BirthDate = user.BirthDate.ArrayToDateTime();
            dbUser.Email = user.Email;
            dbUser.Name = user.Name;
            dbUser.Family = user.Family;
            dbUser.IsActive = user.IsActive;
            dbUser.Password = user.Password;
            return await db.SaveChangesAsync() > 0 ? GetSuccessResult(dbUser) : GetFailResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ApiResultDTO> Delete(int id)
        {
            var dbUser = db.Users.Find(id);
            db.Users.Remove(dbUser);
            return await db.SaveChangesAsync() > 0 ? GetSuccessResult(dbUser) : GetFailResult();
        }
    }
}
