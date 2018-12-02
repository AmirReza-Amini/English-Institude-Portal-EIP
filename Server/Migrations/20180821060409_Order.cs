using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class Order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HtmlId",
                table: "Menu");

            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "Menu",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "Menu");

            migrationBuilder.AddColumn<string>(
                name: "HtmlId",
                table: "Menu",
                nullable: true);
        }
    }
}
