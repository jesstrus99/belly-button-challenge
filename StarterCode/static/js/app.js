const samples=("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")

d3.json(samples).then(function(data) {
    console.log(data);
     let names = data.samples.map(s=>s.id)
     names.forEach(function(name) {
         d3.select('#selDataset').append('option').text(name)
         });
  });

