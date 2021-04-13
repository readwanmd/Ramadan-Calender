let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

export const date = `${dd}/${mm}/${yyyy}`;
