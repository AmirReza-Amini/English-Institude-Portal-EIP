using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class Product_BasketEdit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastAct",
                table: "Baskets");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LastAct",
                table: "Baskets",
                nullable: false,
                defaultValue: 0);
        }
    }
}
