export default function formatRandomDate(dateInput) {

const dateObject = new window.Date(dateInput);

  // استخراج السنة والشهر واليوم من التاريخ
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  // تنسيق التاريخ بالشكل المطلوب (YYYY-MM-DD)
return `${year}-${month}-${day}`

 
}


