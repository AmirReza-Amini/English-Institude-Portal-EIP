using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class menuhtmlid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HtmlId",
                table: "Menu",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HtmlId",
                table: "Menu");
        }
    }
}
