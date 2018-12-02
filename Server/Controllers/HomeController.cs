using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}