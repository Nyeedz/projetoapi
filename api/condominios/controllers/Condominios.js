'use strict';

/**
 * Condominios.js controller
 *
 * @description: A set of functions called "actions" for managing `Condominios`.
 */

module.exports = {

  /**
   * Retrieve condominios records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.condominios.search(ctx.query);
    } else {
      return strapi.services.condominios.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a condominios record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.condominios.fetch(ctx.params);
  },

  /**
   * Count condominios records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.condominios.count(ctx.query);
  },

  /**
   * Create a/an condominios record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.condominios.add(ctx.request.body);
  },

  /**
   * Update a/an condominios record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.condominios.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an condominios record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.condominios.remove(ctx.params);
  }
};
