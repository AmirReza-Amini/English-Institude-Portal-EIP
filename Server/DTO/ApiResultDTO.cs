namespace Server.DTO
{
    public class ApiResultDTO
    {
        public bool Result { get; set; } = true;
        public string Message { get; set; } = "عملیات با موفقیت انجام شد";
        public object Data { get; set; }
    }
}
