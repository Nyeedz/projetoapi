'use strict';

/**
 * Tipologia.js controller
 *
 * @description: A set of functions called "actions" for managing `Tipologia`.
 */

module.exports = {

  /**
   * Retrieve tipologia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tipologia.search(ctx.query);
    } else {
      return strapi.services.tipologia.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tipologia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tipologia.fetch(ctx.params);
  },

  /**
   * Count tipologia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tipologia.count(ctx.query);
  },

  /**
   * Create a/an tipologia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tipologia.add(ctx.request.body);
  },

  /**
   * Update a/an tipologia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tipologia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tipologia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tipologia.remove(ctx.params);
  }
};
