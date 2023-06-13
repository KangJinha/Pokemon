export const home = (req, res) => res.sendFile(__dirname + "/index.html");
export const join = (req, res) => res.render("join");
