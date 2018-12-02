using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public List<string> BirthDate { get; set; }
        public bool IsActive { get; set; }
        public string Name { get; set; }
        public string Family { get; set; }
        public string Password { get; set; }
    }
}
