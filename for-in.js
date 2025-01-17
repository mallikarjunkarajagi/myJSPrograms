var colors = {
    primary:'Red',
    secondary:'Blue',
    tertiary:'Green'
}

for(var color in colors)
{
    console.log(color + ' -> '+colors[color]);
}

var colorsArray = ['red','green','orange']

for(var color in colorsArray)
{
    console.log(color + ' -> '+colorsArray[color]);
}

colorsArray.forEach((item) => console.log(item));

