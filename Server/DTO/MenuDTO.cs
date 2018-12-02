using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.DTO
{
    public class MenuDTO
    {
        public string Text { get; set; }
        public string Icon { get; set; }
        public string Tag { get; set; }
        public string Url { get; set; }
        public string SubMenuId { get; set; }
        public ICollection<MenuDTO> SubMenu { get; set; }
        public bool HasParam { get; internal set; }
        public int Id { get; internal set; }
        public int Order { get; internal set; }
        public bool IsActive { get; internal set; }
    }
}
