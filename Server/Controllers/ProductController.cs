using System;
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
    [Produces("application/json")]
    [Route("api/Product")]
    public class ProductController : Controller
    {
        private readonly Context db;
        public ProductController(Context db)
        {
            this.db = db;
        }

        [HttpGet("{type}")]
        public async Task<ApiResultDTO> Get(ProductType type)
        {
            var data = from p in db.Products.Where(m => m.ProductType == type)
                       from u in db.Users.Where(m => m.UserId == p.UserId)
                       select new ProductDTO
                       {
                           Id = p.Id,
                           Title = p.Title,
                           Quantity = p.Quantity,
                           CreateDateEn = p.CreateDate,
                           Price = p.Price,
                           ImageUrl = p.ImageUrl,
                           Description = p.Description,
                           UserName = u.FullName,
                           CriticalQuantity = p.CriticalQuantity,
                           UnitType = p.UnitType,
                           IsExist = p.IsExist
                       };

            return GetSuccessResult(await data.ToListAsync());
        }

        [HttpPost]
        public async Task<ApiResultDTO> Post([FromBody]Product product)
        {
            try
            {
                if (product.Id == 0)
                {
                    db.Products.Add(product);

                    return await db.SaveChangesAsync() > 0 ?
                        GetResult("محصول جدید با موفقیت اضافه شد", true) :
                        GetResult("خطا در ثبت محصول جدید", false);
                }
                var prdt = db.Products.Find(product.Id);
                prdt.IsExist = product.IsExist ? product.Quantity > 0 : product.IsExist;
                prdt.ImageUrl = product.ImageUrl ?? "";
                prdt.Quantity = product.Quantity;
                prdt.CriticalQuantity = product.CriticalQuantity;
                prdt.Title = product.Title;
                prdt.UnitType = product.UnitType;
                prdt.Price = product.Price;
                prdt.Description = product.Description ?? "---";
                return await db.SaveChangesAsync() > 0 ?
                    GetResult("محصول با موفقیت ویرایش شد", true) :
                    GetResult("خطا در ویرایش محصول", false);
            }
            catch (Exception ex)
            {
                return GetResult(ex.Message, false);
            }
        }

        [HttpPost("toggle-exist")]
        public async Task<ApiResultDTO> ChangeExistStatus([FromBody]ProductDTO product)
        {
            var prdt = db.Products.Find(product.Id);
            prdt.IsExist = !prdt.IsExist;

            return await db.SaveChangesAsync() > 0 ?
                GetResult( "وضعیت موجودی با موفقیت ویرایش شد",true):
                GetResult("خطا در ویرایش وضعیت موجودی",false);
        }

        [HttpDelete("{id}")]
        public async Task<ApiResultDTO> Delete(int id)
        {
            var prdt = db.Products.Find(id);
            if (db.BasketDetail.Any(m => m.ProductId == id))
                return GetResult("این کالا در سبد خرید موجود می باشد و شما قادر به حذف آن نیستید", false);
            db.Entry(prdt).State = EntityState.Deleted;

            return await db.SaveChangesAsync() > 0
                ? GetSuccessResult(prdt)
               : GetFailResult();
        }
    }
}