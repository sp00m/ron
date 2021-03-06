const { CrudRepository } = require("../repository/")
const Service = require("./Service")

module.exports = class CrudService extends Service {

  constructor(repository) {
    super()
    if (this.constructor.name === "CrudService") {
      throw new TypeError("Cannot instantiate CrudService")
    }
    if (!(repository instanceof CrudRepository)) {
      throw new TypeError("repository must be an instance of CrudRepository")
    }
    this.repository = repository
  }

  *findOneById(id) {
    return yield this.repository.findOneById(id)
  }

  *findMany() {
    return yield this.repository.findMany()
  }

  *insertOne(resource, returnResource) {
    return yield this.repository.insertOne(resource, returnResource)
  }

  *replaceOneById(id, resource, returnResource) {
    return yield this.repository.replaceOneById(id, resource, returnResource)
  }

  *updateOneById(id, update, returnResource) {
    return yield this.repository.updateOneById(id, update, returnResource)
  }

  *deleteOneById(id, returnResource) {
    return yield this.repository.deleteOneById(id, returnResource)
  }

  *deleteMany(returnResources) {
    return yield this.repository.deleteMany(returnResources)
  }

}
