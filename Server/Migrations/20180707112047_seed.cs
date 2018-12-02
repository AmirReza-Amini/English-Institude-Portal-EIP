using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"INSERT Users VALUES  
(N'امیررضا', N'امینی', N'ara@a.com', N'123456', '1989-08-06'),
(N'سوده', N'سعیدی', N'Soo@a.com', N'123456', '1994-10-19'),
(N'هانیه' ,N'امینی' ,N'Ha@a.com' ,N'123456' ,'1996-09-28'),
(N'ممد' ,N'لواش' ,N'ara@a.com' ,N'123456' ,'1922-03-22')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}