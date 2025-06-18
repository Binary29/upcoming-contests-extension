var today = new Date(); 
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyyy=today.getFullYear();
var startDate = yyyy + '-' + mm + '-' + dd;
// console.log(typeof(today))

var next7Date = new Date();
next7Date.setDate(today.getDate() + 7); 
var dd1=next7Date.getDate();
var mm1=next7Date.getMonth()+1;
var yyyy1=next7Date.getFullYear();
var endDate = yyyy1 + '-' + mm1 + '-' + dd1;
// console.log(typeof(today))


fetch(`https://clist.by/api/v4/contest/?username=neeraj14&api_key=f20185aa543d700c08915cbc682aa4d9b6942057&upcoming=true&format=json&start__gt=${startDate}&end__lt=${endDate}&order_by=start`)
	.then(response => response.json())
	.then(res => {
		const data = res.objects;
		let rows='';
		data.forEach(obj => {
			rows += `<tr>
						<td>${obj.host}</td>
						<td>${obj.event}</td>
						<td><a href=${obj.href}>${obj.href}</a></td>
						<td>${obj.start}</td>
						<td>${obj.end}</td>
					</tr>`
		})
		document.getElementById("tableRows").innerHTML=rows;
	})
	.catch(err=> console.log(res));



