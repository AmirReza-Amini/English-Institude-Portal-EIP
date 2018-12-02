using Server.DTO;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Server.Tools
{
    public static class Extension
    {
        public static decimal ZeroIfNull(this decimal? input)
        {
            return input ?? 0;
        }

        public static decimal ZeroIfNullOrNegative(this decimal? input)
        {
            return input < 0 ? 0 : input.ZeroIfNull();
        }

        public static long ZeroIfNull(this long? input)
        {
            return input ?? 0;
        }

        public static decimal ZeroIfNull(this float? input)
        {
            return input != null ? (decimal)input : 0;
        }
        public static long ZeroIfNull(this long input)
        {
            return input;
        }
        public static decimal ZeroIfNullFloat(this float? input)
        {
            return input != null ? (decimal)input : 0;
        }
        public static string ToPersianDateTime(this DateTime input, string dateSpacer = "/", string timeSpacer = ":")
        {
            string date = ToPersian(input, dateSpacer);
            string time = GetTimeShort(input, timeSpacer);
            return time + " - " + date;
        }

        public static string ToPersianDate(this DateTime input)
        {
            var pc = new PersianCalendar();
            return string.Format("{0}/{1:D2}/{2:D2}", pc.GetYear(input), pc.GetMonth(input), pc.GetDayOfMonth(input));
        }

        public static string ToPersianDateTime(this DateTime input, bool greaterOrEqualToday, string dateSpacer = "/", string timeSpacer = ":")
        {
            if (greaterOrEqualToday && input < DateTime.Today)
                return "----/--/--";
            string date = ToPersian(input, dateSpacer);
            string time = GetTimeShort(input, timeSpacer);
            return date;// "  " + time;
        }

        public static string ToSmallPersian(this DateTime input)
        {
            if (input != DateTime.MinValue)
            {
                var pc = new PersianCalendar();
                return string.Format("{0}{1:D2}", pc.GetYear(input).ToString().Substring(2, 2), pc.GetMonth(input));
            }
            return "0000";
        }

        public static int ToPersianDayOfMonth(this DateTime input)
        {
            var pc = new PersianCalendar();
            return pc.GetDayOfMonth(input);
        }
        public static string ToPersianDateTime(this DateTime? input, string dateSpacer = "/", string timeSpacer = ":")
        {
            string date = ToPersian(input, dateSpacer);
            string time = GetTimeShort(input, timeSpacer);
            return date + "  " + time;
        }

        public static string ToPersianDateTimeLong(this DateTime input, string dateSpacer = "/", string timeSpacer = ":")
        {
            string date = ToPersian(input, dateSpacer);
            string time = GetTime(input, timeSpacer);
            return date + "  " + time;
        }
        public static string ToPersian(this DateTime input, string spacer = "/")
        {
            if (input != DateTime.MinValue)
            {
                var pc = new PersianCalendar();
                return string.Format("{0}{1}{2:D2}{3}{4:D2}", pc.GetYear(input), spacer, pc.GetMonth(input), spacer, pc.GetDayOfMonth(input));
            }
            return "----/--/--";
        }

        public static List<string> ToSepratedPersianDate(this DateTime input)
        {
            if (input != DateTime.MinValue)
            {
                var pc = new PersianCalendar();
                var result = new List<string> { pc.GetYear(input).ToString(), pc.GetMonth(input).ToString("D2"), pc.GetDayOfMonth(input).ToString() };
                return result;
            }
            return new List<string>();
        }
        public static string ToPersianTime(this DateTime input)
        {
            string time = "";

            string temp = DateTime.Now.ToShortTimeString();

            if (temp.Contains("AM") || temp.Contains("PM"))
            {
                string[] s1 = temp.Split(' ');
                string[] s2 = s1[0].Split(':');

                int h = int.Parse(s2[0]);
                int m = int.Parse(s2[1]);

                time = (h < 10) ? "0" + h.ToString() : h.ToString();
                time += ":";
                time += (m < 10) ? "0" + m.ToString() : m.ToString();
                time += " ";
                time += (s1[1] == "AM") ? "صبح" : "عصر";
            }
            return time;
        }
        public static string ToPersian(this DateTime? input, string spacer = "/")
        {
            if (input != null && input.Value != DateTime.MinValue)
            {
                var pc = new PersianCalendar();
                return string.Format("{0}{1}{2:D2}{3}{4:D2}", pc.GetYear(input.Value), spacer, pc.GetMonth(input.Value), spacer, pc.GetDayOfMonth(input.Value));

            }
            return "----/--/--";
        }
        public static string GetTime(this DateTime? input, string spacer = ":")
        {
            if (input != null)
            {
                var pc = new PersianCalendar();
                return string.Format("{0:D2}{1}{2:D2}{3}{4:D2}", pc.GetHour(input.Value), spacer, pc.GetMinute(input.Value), spacer, pc.GetSecond(input.Value));
            }
            return "--:--";
        }

        public static string GetTime(this DateTime input, string spacer = ":")
        {
            if (input != null)
            {
                var pc = new PersianCalendar();
                return string.Format("{0:D2}{1}{2:D2}{3}{4:D2}", pc.GetHour(input), spacer, pc.GetMinute(input), spacer, pc.GetSecond(input));
            }
            return "--:--";
        }

        public static string GetTimeShort(this DateTime input, string spacer = ":")
        {
            if (input != null)
            {
                var pc = new PersianCalendar();
                return string.Format("{0:D2}{1}{2:D2}", pc.GetHour(input), spacer, pc.GetMinute(input));
            }
            return "--:--";
        }
        public static string GetTimeShort(this DateTime? input, string spacer = ":")
        {
            if (input != null)
            {
                var pc = new PersianCalendar();
                return string.Format("{0:D2}{1}{2:D2}", pc.GetHour(input.Value), spacer, pc.GetMinute(input.Value));
            }
            return "--:--";
        }

        public static DateTime ToMiladi(this string shamsiDate)
        {
            var pc = new PersianCalendar();
            var seprateDate = new List<int>();
            try
            {
                shamsiDate.Split('/').ToList().ForEach(m => seprateDate.Add(int.Parse(m.Trim())));
                return pc.ToDateTime(seprateDate[0], seprateDate[1], seprateDate[2], 0, 0, 0, 0);
            }
            catch
            {
                throw new FormatException("ورودی نا معتبر!ورودی باید دارای فرمت زیر باشد\nXXXX/XX/XX");
            }
        }

        public static DateTime ArrayToDateTime(this List<string> input)
        {
            var pc = new PersianCalendar();
            return pc.ToDateTime(int.Parse(input[0]), int.Parse(input[1]), int.Parse(input[2]), 0, 0, 0, 0);
        }

        public static string ToUnitText(this UnitType unit)
        {
            var unitTypeName = new Dictionary<UnitType, string>
        {
            { UnitType.Kiloogram,"کیلوگرم" },
            { UnitType.Item,"عدد" },
            { UnitType.Ton,"تن" },
            { UnitType.Pack,"بسته" },
        };
            return unitTypeName[unit];
        }

        public static ApiResultDTO GetResult(string message, bool result,object data = null)
        {
            return new ApiResultDTO
            {
                Result = result,
                Message = message,
                Data = data
            };
        }

        public static ApiResultDTO GetSuccessResult(object data = null)
        {
            return GetResult("عملیات با موفقیت انجام شد", true, data);
        }

        public static ApiResultDTO GetFailResult()
        {
            return GetResult("عملیات با مشکل مواجه شد", false);
        }
    }
}