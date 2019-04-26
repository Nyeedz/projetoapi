'use strict';

/**
 * Pesquisasatisfacao.js controller
 *
 * @description: A set of functions called "actions" for managing `Pesquisasatisfacao`.
 */

module.exports = {

  /**
   * Retrieve pesquisasatisfacao records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pesquisasatisfacao.search(ctx.query);
    } else {
      return strapi.services.pesquisasatisfacao.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pesquisasatisfacao record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pesquisasatisfacao.fetch(ctx.params);
  },

  /**
   * Count pesquisasatisfacao records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pesquisasatisfacao.count(ctx.query);
  },

  /**
   * Create a/an pesquisasatisfacao record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pesquisasatisfacao.add(ctx.request.body);
  },

  /**
   * Update a/an pesquisasatisfacao record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pesquisasatisfacao.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pesquisasatisfacao record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pesquisasatisfacao.remove(ctx.params);
  }
};
