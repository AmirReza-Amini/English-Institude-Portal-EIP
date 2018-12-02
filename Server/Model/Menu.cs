using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Model
{
    public class Menu
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Icon { get; set; }
        public string Tag { get; set; }
        public string Url { get; set; }
        public string SubMenuId { get; set; }
        public int? MenuId { get; set; }
        public int Order { get; set; }
        public bool isActive { get; set; } = true;
        [ForeignKey("MenuId")]
        public virtual Menu Parrent { get; set; }
        public ICollection<Menu> SubMenu { get; set; }
    }
}
