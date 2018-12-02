using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DTO;
using Server.Model;
using static Server.Tools.Extension;

namespace Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Menu")]
    public class MenuController : Controller
    {
        private readonly Context db;
        public MenuController(Context db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<ApiResultDTO> Get()
        {
            var data1 = await db.Menu.Include(m => m.SubMenu).Where(m => m.MenuId == null && m.isActive).ToListAsync();
                
              var data = data1.Select(m => new MenuDTO
            {
                Order = m.Order,
                IsActive = m.isActive,
                Text = m.Text,
                Icon = m.Icon,
                SubMenuId = m.SubMenuId,
                Tag = m.Tag,
                Url = m.SubMenuId ?? m.Url,
                Id = m.Id,
                SubMenu = m.SubMenu.Select(n => new MenuDTO
                {
                    Id = n.Id,
                    IsActive = n.isActive,
                    Order = n.Order,
                    Text = n.Text,
                    Icon = n.Icon,
                    Tag = n.Tag,
                    Url = m.Url + n.Url,
                    HasParam = string.IsNullOrEmpty(n.Url)
                }).ToList()
            }).OrderBy(m => m.Order).ToList();

            if (data.Any())
                return GetSuccessResult(data);
            return GetFailResult();
        }

        [HttpPost]
        public async Task<ApiResultDTO> Post([FromBody] Menu menu)
        {
            if (menu.Id == 0)
            {
                db.Menu.Add(menu);
                if (await db.SaveChangesAsync() > 0)
                    return GetResult("منوی جدید با موفقیت اضافه شد، برای اعمال تغییرات، صفحه را Refresh نمایید",true);
                return GetResult("خطا در درج منو", false);
            }
            return GetResult("در دست بررسی...",true);
        }

        [HttpPost("change-order")]
        public async Task<ApiResultDTO> ChangeOrder([FromBody]OrderUpdateDTO input)
        {
            var menu = db.Menu.Find(input.Id);
            var menuCurrentValue = db.Menu.FirstOrDefault(m => m.Order == input.Order);
            if (menuCurrentValue == null)
                return GetResult("عدد وارد شده معتبر نمی باشد", false);
            menuCurrentValue.Order = menu.Order;
            menu.Order = input.Order;
            if (await db.SaveChangesAsync() > 0)
                return GetSuccessResult();
            return GetFailResult();
        }

        [HttpGet("toggle-active/{menuId}")]
        public async Task<ApiResultDTO> ToggleActive(int menuId)
        {
            var menu = db.Menu.Find(menuId);
            menu.isActive = !menu.isActive;
            if (await db.SaveChangesAsync() > 0)
                return GetSuccessResult();
            return GetFailResult();
        }
    }
}