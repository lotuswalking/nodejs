const screenshot = require('screenshot-desktop')
const fs = require('fs');
// @ts-ignore
screenshot.listDisplays().then((displays) => {
  // displays: [{ id, name }, { id, name }]
  displays.forEach(({ id, name,right, bottom, left, height, width }) => {
    console.log(`displays id: ${id}, Name: ${name}, right:${right}, bottom:${bottom}, left ${left}, height: ${height}, width: ${height}`);
  // @ts-ignore
  screenshot({ screen: id })
    .then((img) => {
      // console.log(img);
      const pattern = new RegExp('\w+','u');
      let filepath = id.substring(id.lastIndexOf('\\')+1);
      console.log(filepath);
      fs.writeFile(`${filepath}.png`, img, (err) => {
        if(err) throw err;
        console.log(`File ${filepath} Saved!`);
        // fs.close();
        });
    });
  });
  
})