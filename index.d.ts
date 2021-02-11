import DataTypes = require("./types/lib/data-types");
import Deferrable = require("./types/lib/deferrable");
import Op = require("./types/lib/operators");
import QueryTypes = require("./types/lib/query-types");
import TableHints = require("./types/lib/table-hints");
import IndexHints = require("./types/lib/index-hints");
import Utils = require("./types/lib/utils");

export * from "./types/lib/sequelize";
export * from "./types/lib/query-interface";
export * from "./types/lib/data-types";
export * from "./types/lib/model";
export * from "./types/lib/transaction";
export * from "./types/lib/associations/index";
export * from "./types/lib/errors";
export { BaseError as Error } from "./types/lib/errors";
export { useInflection } from "./types/lib/utils";
export { Utils, QueryTypes, Op, TableHints, IndexHints, DataTypes, Deferrable };
export { Validator as validator } from "./types/lib/utils/validator-extras";

/**
 * Type helper for making certain fields of an object optional. This is helpful
 * for creating the `CreationAttributes` from your `Attributes` for a Model.
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
