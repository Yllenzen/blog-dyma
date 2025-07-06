const { Console } = require("console");
const fs = require("fs");

fs.open("./fichiertest.txt", "a+", (err, fd) => {
  if (err) throw err;
  console.log(fd);
  //   fs.write(fd, "bonjour", (err, written, str) => {
  //     console.log({ err, written, str });
  //     fs.close(fd, (err) => {});
  //   });

  const buffer = new Buffer.from(new ArrayBuffer(8), "utf-8");
  let content = "";

  fs.read(fd, buffer, 0, 8, 0, (err, bytesRead, buffer) => {
    content += buffer.toString();
    console.log({ err, bytesRead, buffer, content });

    fs.read(fd, buffer, 0, 8, 8, (err, bytesRead, buffer) => {
      content += buffer.toString();
      console.log({ err, bytesRead, buffer, content });
      fs.close(fd, (err) => {});
    });
  });
});
