using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class Product_Exist : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsExist",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsExist",
                table: "Products");
        }
    }
}
