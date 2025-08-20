const index = (req,res) =>{
    res.status(200).send("Home")
}
const notFound = (req,res) =>{
    res.status(404).send("not found")
}

module.exports = {
    index,
    notFound
}