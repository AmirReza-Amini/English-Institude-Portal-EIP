export class Tools {
  public GetNameOfMonth(value) {
    if (value) {
      const input = parseInt(value.toString());
      switch (input) {
        case 1: return 'فروردین';
        case 2: return 'اردیبهشت';
        case 3: return 'خرداد';
        case 4: return 'تیر';
        case 5: return 'مرداد';
        case 6: return 'شهریور';
        case 7: return 'مهر';
        case 8: return 'آبان'
        case 9: return 'آذر';
        case 10: return 'دی';
        case 11: return 'بهمن';
        case 12: return 'اسفند';
      }
    }
    return '---';
  }

  public FormatNumberLength(num, length) {
    let r = '' + num;
    while (r.length < length) {
      r = '0' + r;
    }
    return r;
  }

  public GenerateBirthDateString(birthDate) {
    return birthDate[2] + " / " +
      this.GetNameOfMonth(birthDate[1]) + " / " +
      birthDate[0];
  }

  public ShowErrMsg(toast, text) {
    toast.pop('error', text);
  }

  public ShowSuccessMsg(toast, text) {
    toast.pop('success', text);
  }
}