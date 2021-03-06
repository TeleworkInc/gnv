/** @license MIT */
/**
 * @fileoverview
 * Globals to be overridden at compile-time.
 */

/**
 * Override `goog` global when run outside of compiler.
 */
if (typeof goog === 'undefined')
  globalThis.goog = {
    define: (n, v) => v,
  };

/**
 * Compiler-level constant that informs CC whether or not to rename tag names.
 * Override in Closure Compiler with `--define='RELEASE=true'`.
 *
 * @define {boolean}
 */
export var RELEASE = goog.define('RELEASE', false);

/**
 * Whether or not to log debug messages. Compiler overrides to false.
 *
 * @define {boolean}
 */
export var DEV = goog.define('DEV', true);
