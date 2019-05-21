'use strict';

/**
 * Unidades.js controller
 *
 * @description: A set of functions called "actions" for managing `Unidades`.
 */

module.exports = {

  /**
   * Retrieve unidades records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.unidades.search(ctx.query);
    } else {
      return strapi.services.unidades.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a unidades record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.unidades.fetch(ctx.params);
  },

  /**
   * Count unidades records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.unidades.count(ctx.query);
  },

  /**
   * Create a/an unidades record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.unidades.add(ctx.request.body);
  },

  /**
   * Update a/an unidades record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.unidades.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an unidades record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.unidades.remove(ctx.params);
  }
};
