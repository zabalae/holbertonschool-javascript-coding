class AppController {
  static getHome(req, res) {
    res.status(200).send('Hello Holberton School!')
  }
}

export default AppController;
module.exports = AppController;
