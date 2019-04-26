'use strict';

/**
 * Garantia.js controller
 *
 * @description: A set of functions called "actions" for managing `Garantia`.
 */

module.exports = {

  /**
   * Retrieve garantia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.garantia.search(ctx.query);
    } else {
      return strapi.services.garantia.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a garantia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.garantia.fetch(ctx.params);
  },

  /**
   * Count garantia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.garantia.count(ctx.query);
  },

  /**
   * Create a/an garantia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.garantia.add(ctx.request.body);
  },

  /**
   * Update a/an garantia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.garantia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an garantia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.garantia.remove(ctx.params);
  }
};
