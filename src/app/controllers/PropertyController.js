class PropertyController {
  index(req, res) {
    return res.json({
      result: {
        property: { id: 1 },
      },
    });
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

export default new PropertyController();
