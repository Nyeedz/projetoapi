'use strict';

/**
 * Areascomuns.js controller
 *
 * @description: A set of functions called "actions" for managing `Areascomuns`.
 */

module.exports = {

  /**
   * Retrieve areascomuns records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.areascomuns.search(ctx.query);
    } else {
      return strapi.services.areascomuns.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a areascomuns record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.areascomuns.fetch(ctx.params);
  },

  /**
   * Count areascomuns records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.areascomuns.count(ctx.query);
  },

  /**
   * Create a/an areascomuns record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.areascomuns.add(ctx.request.body);
  },

  /**
   * Update a/an areascomuns record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.areascomuns.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an areascomuns record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.areascomuns.remove(ctx.params);
  }
};
