Elementstr=localStorage.getItem("temp")
element=JSON.parse(Elementstr)
year={1:"1",2:"1",3:"2",4:"2",5:"3",6:"3",7:"4",8:"4"}
cal_year=year[element.sem]
let str = `
<tr>
    <th>roll number</th>
    <td>:</td>
    <td>${element.roll}</td>
    <th>year</th>
    <td>:</td>
    <td>${cal_year}</td>
</tr>
<tr>
    <th>student's name</th>
    <td>:</td>
    <td>${element.f_naam.toUpperCase()+" "+element.m_naam.toUpperCase()+" "+element.l_naam.toUpperCase()}</td>
    <th>semester</th>
    <td>:</td>
    <td>${element.sem}</td>
</tr>
<tr>
    <th>library card id</th>
    <td>:</td>
    <td>${element.library.toUpperCase()}</td>
    <th>branch</th>
    <td>:</td>
    <td>${element.branch}</td>
</tr>`
tablebody.innerHTML = str