const homePage = (req,res) => {
    res.render('index',{
        title: "Shopnolok | Homepage"
    });
}

module.exports = {homePage};