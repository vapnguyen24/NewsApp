export const convertDate = (date) => {
    const dateObj = new Date(date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return day + "/" + month + "/" + year;
  }

export const getShortContent = (content) => {
  if (content.length <= 45)
    return content;

  const contentArr = content.split('');
  let res = '';
  for (let i = 0; i < contentArr.length; i++) {
    if (i > 45) break;
    res += contentArr[i];
  }
  return res + '...';
}

export const base64File = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      return base64data;
      // console.log('base: ', base64data)
      // resolve(base64data);
      // console.log(resolve(base64data))
    };
  });
}