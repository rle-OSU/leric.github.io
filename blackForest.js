var forestResources = ["Copper","Tin","Core Wood","Surtling Cores","Greydwarf Eyes","Troll Hide","Thistle","Ancient Seed"]
var forestList = document.createElement("ul");
forestList.id = "forestList";
for (let i = 0; i<forestResources.length; i++)
{
    let listItem = document.createElement("li");
    listItem.textContent = forestResources[i];
    forestList.appendChild(listItem);
}
document.getElementById("forestResources").appendChild(forestList);