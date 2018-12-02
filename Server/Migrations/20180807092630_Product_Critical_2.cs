using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class Product_Critical_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CriticalQuantity",
                table: "Products",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CriticalQuantity",
                table: "Products");
        }
    }
}
