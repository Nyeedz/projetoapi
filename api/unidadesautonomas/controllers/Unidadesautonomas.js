'use strict';

/**
 * Unidadesautonomas.js controller
 *
 * @description: A set of functions called "actions" for managing `Unidadesautonomas`.
 */

module.exports = {

  /**
   * Retrieve unidadesautonomas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.unidadesautonomas.search(ctx.query);
    } else {
      return strapi.services.unidadesautonomas.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a unidadesautonomas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.unidadesautonomas.fetch(ctx.params);
  },

  /**
   * Count unidadesautonomas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.unidadesautonomas.count(ctx.query);
  },

  /**
   * Create a/an unidadesautonomas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.unidadesautonomas.add(ctx.request.body);
  },

  /**
   * Update a/an unidadesautonomas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.unidadesautonomas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an unidadesautonomas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.unidadesautonomas.remove(ctx.params);
  }
};
