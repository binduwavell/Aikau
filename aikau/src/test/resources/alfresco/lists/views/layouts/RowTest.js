/**
 * Copyright (C) 2005-2015 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @author Dave Draper
 */
define(["intern!object",
        "intern/chai!assert",
        "require",
        "alfresco/TestCommon"],
        function(registerSuite, assert, require, TestCommon) {

   var browser;
   registerSuite({
      name: "Row Tests",

      setup: function() {
         browser = this.remote;
         return TestCommon.loadTestWebScript(this.remote, "/Row", "Row Tests").end();
      },

      beforeEach: function() {
         browser.end();
      },

      "Test that row has additional CSS classes": function() {
         return browser.findAllByCssSelector("tr.extra")
            .then(function(elements) {
               assert.lengthOf(elements, 1, "Additional CSS classes not applied correctly");
            });
      },

      "Test colspan can be set on cell": function() {
         return browser.findByCssSelector("#ONE_CELL td.alfresco-lists-views-layouts-Cell")
            .getAttribute("colspan")
            .then(function(colspan) {
               assert.equal(colspan, 2, "Colspan attribute not set on cell");
            });
      },

      "Post Coverage Results": function() {
         TestCommon.alfPostCoverageResults(this, browser);
      }
   });
});