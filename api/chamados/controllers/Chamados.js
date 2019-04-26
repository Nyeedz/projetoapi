'use strict';

/**
 * Chamados.js controller
 *
 * @description: A set of functions called "actions" for managing `Chamados`.
 */

module.exports = {

  /**
   * Retrieve chamados records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.chamados.search(ctx.query);
    } else {
      return strapi.services.chamados.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a chamados record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.chamados.fetch(ctx.params);
  },

  /**
   * Count chamados records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.chamados.count(ctx.query);
  },

  /**
   * Create a/an chamados record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.chamados.add(ctx.request.body);
  },

  /**
   * Update a/an chamados record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.chamados.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an chamados record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.chamados.remove(ctx.params);
  }
};
