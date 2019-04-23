'use strict';

/**
 * Areasgerais.js controller
 *
 * @description: A set of functions called "actions" for managing `Areasgerais`.
 */

module.exports = {

  /**
   * Retrieve areasgerais records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.areasgerais.search(ctx.query);
    } else {
      return strapi.services.areasgerais.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a areasgerais record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.areasgerais.fetch(ctx.params);
  },

  /**
   * Count areasgerais records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.areasgerais.count(ctx.query);
  },

  /**
   * Create a/an areasgerais record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.areasgerais.add(ctx.request.body);
  },

  /**
   * Update a/an areasgerais record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.areasgerais.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an areasgerais record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.areasgerais.remove(ctx.params);
  }
};
