using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class Product_UnitType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "UnitType",
                table: "Products",
                nullable: false,
                defaultValue: (byte)0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UnitType",
                table: "Products");
        }
    }
}
