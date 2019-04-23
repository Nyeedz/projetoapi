'use strict';

/**
 * Construtoras.js controller
 *
 * @description: A set of functions called "actions" for managing `Construtoras`.
 */

module.exports = {

  /**
   * Retrieve construtoras records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.construtoras.search(ctx.query);
    } else {
      return strapi.services.construtoras.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a construtoras record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.construtoras.fetch(ctx.params);
  },

  /**
   * Count construtoras records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.construtoras.count(ctx.query);
  },

  /**
   * Create a/an construtoras record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.construtoras.add(ctx.request.body);
  },

  /**
   * Update a/an construtoras record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.construtoras.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an construtoras record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.construtoras.remove(ctx.params);
  }
};
